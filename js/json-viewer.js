// Progressive enhancement for request-JSON blocks in the center column.
// Finds JSON code blocks inside .left-docs, parses them, and swaps in an
// interactive tree: collapsible objects/arrays, type hints, and null values
// marked as optional. If a block doesn't parse, it's left untouched.
//
// Optionality convention: mark the key, not the value.
//   "color?": ...  -> optional  (badge, "?" stripped from the shown key)
//   "vin*":   ...  -> required  (badge, "*" stripped from the shown key)
//   "make":   ...  -> unmarked, no badge
// The marker works on any value or type, including whole objects/arrays
// ("driver?": { ... }). Copy output strips the markers so the payload stays
// clean. The value being null carries no meaning on its own.
//
// Runs before main.js so the blocks it transforms are gone before main.js
// applies its language-tab treatment to the remaining code blocks.
jQuery(function () {
	var blocks = document.querySelectorAll(".left-docs .language-json");

	Array.prototype.forEach.call(blocks, function (block) {
		var codeEl = block.querySelector("code") || block;
		var raw = codeEl.textContent;
		var data;

		try {
			data = JSON.parse(raw);
		} catch (e) {
			return; // not valid JSON, leave the original code block as-is
		}

		var viewer = buildViewer(data);
		block.parentNode.replaceChild(viewer, block);
	});

	function el(tag, cls, text) {
		var n = document.createElement(tag);
		if (cls) { n.className = cls; }
		if (text != null) { n.textContent = text; }
		return n;
	}

	function typeName(v) {
		if (v === null) { return "null"; }
		if (Array.isArray(v)) { return "array"; }
		return typeof v; // string | number | boolean | object
	}

	// Reads a trailing ? / * marker off a key. Returns the display name (marker
	// stripped) and the state it signals.
	function markerOf(key) {
		if (key == null) { return { state: null, name: key }; }
		var last = key.charAt(key.length - 1);
		if (last === "?") { return { state: "optional", name: key.slice(0, -1) }; }
		if (last === "*") { return { state: "required", name: key.slice(0, -1) }; }
		return { state: null, name: key };
	}

	// Deep clone for the Copy button: strips markers from every key, and when
	// includeOptional is false drops fields marked optional (matching the
	// Hide optional view) so you can copy the minimal required payload.
	function toCopyObject(v, includeOptional) {
		if (Array.isArray(v)) {
			return v.map(function (x) { return toCopyObject(x, includeOptional); });
		}
		if (v && typeof v === "object") {
			var out = {};
			Object.keys(v).forEach(function (k) {
				var m = markerOf(k);
				if (!includeOptional && m.state === "optional") { return; }
				out[m.name] = toCopyObject(v[k], includeOptional);
			});
			return out;
		}
		return v;
	}

	function appendBadge(row, state) {
		if (state === "optional") {
			row.appendChild(el("span", "jv-tag jv-tag-opt", "optional"));
		} else if (state === "required") {
			row.appendChild(el("span", "jv-tag jv-tag-req", "required"));
		}
	}

	function buildViewer(data) {
		var jv = el("div", "jv");

		var bar = el("div", "jv-toolbar");
		var collapse = el("button", "jv-btn", "Collapse all");
		var expand = el("button", "jv-btn", "Expand all");
		var spacer = el("div", "jv-spacer");
		var types = el("button", "jv-btn", "Type hints");
		var optional = el("button", "jv-btn");
		optional.appendChild(el("span", "jv-dot"));
		optional.appendChild(document.createTextNode("Hide optional"));
		var copy = el("button", "jv-btn", "Copy");

		[collapse, expand, spacer, types, optional, copy].forEach(function (b) {
			bar.appendChild(b);
		});

		var body = el("div", "jv-body");
		renderNode(null, data, body, 0);

		jv.appendChild(bar);
		jv.appendChild(body);

		collapse.addEventListener("click", function () {
			setAll(body, true);
		});
		expand.addEventListener("click", function () {
			setAll(body, false);
		});
		types.addEventListener("click", function () {
			var on = jv.classList.toggle("show-types");
			types.setAttribute("aria-pressed", on ? "true" : "false");
		});
		optional.addEventListener("click", function () {
			var on = jv.classList.toggle("hide-optional");
			optional.setAttribute("aria-pressed", on ? "true" : "false");
			optional.lastChild.textContent = on ? "Show optional" : "Hide optional";
		});
		copy.addEventListener("click", function () {
			var includeOptional = !jv.classList.contains("hide-optional");
			var text = JSON.stringify(toCopyObject(data, includeOptional), null, 2);
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(text).then(function () {
					flash(copy, "Copied");
				}, function () {});
			}
		});

		return jv;
	}

	function flash(btn, label) {
		var prev = btn.textContent;
		btn.textContent = label;
		setTimeout(function () { btn.textContent = prev; }, 1200);
	}

	function setAll(body, collapsed) {
		var groups = body.querySelectorAll(".jv-group");
		Array.prototype.forEach.call(groups, function (g) {
			g.classList.toggle("collapsed", collapsed);
			var tw = g.querySelector(".jv-row > .jv-twisty");
			if (tw) { tw.textContent = collapsed ? "▸" : "▾"; }
		});
	}

	// keyName is null for array elements and the root value.
	function renderNode(keyName, value, parent, depth) {
		var mark = markerOf(keyName);
		var t = typeName(value);
		var isContainer = t === "object" || t === "array";

		var node = el("div", "jv-node");
		if (mark.state === "optional") { node.classList.add("jv-optnode"); }

		var row = el("div", "jv-row");
		row.style.paddingLeft = (depth * 14) + "px";
		if (mark.state === "optional") { row.classList.add("jv-opt"); }

		var tw = el("span", "jv-twisty" + (isContainer ? "" : " leaf"),
			isContainer ? "▾" : "•");
		row.appendChild(tw);

		if (keyName !== null) {
			row.appendChild(el("span", "jv-key", JSON.stringify(mark.name)));
			row.appendChild(el("span", "jv-colon", ": "));
		}

		if (isContainer) {
			var group = el("div", "jv-group");
			var open = t === "array" ? "[" : "{";
			var close = t === "array" ? "]" : "}";
			var count = t === "array" ? value.length : Object.keys(value).length;
			var noun = t === "array"
				? (count === 1 ? " item" : " items")
				: (count === 1 ? " field" : " fields");

			row.appendChild(el("span", "jv-punc", open));
			row.appendChild(el("span", "jv-inline", " " + count + noun + " " + close));
			appendBadge(row, mark.state);
			group.appendChild(row);

			var kids = el("div", "jv-children");
			var entries = t === "array"
				? value.map(function (v) { return [null, v]; })
				: Object.keys(value).map(function (k) { return [k, value[k]]; });
			entries.forEach(function (pair) {
				renderNode(pair[0], pair[1], kids, depth + 1);
			});

			var closeRow = el("div", "jv-row");
			closeRow.style.paddingLeft = (depth * 14) + "px";
			closeRow.appendChild(el("span", "jv-twisty leaf", "•"));
			closeRow.appendChild(el("span", "jv-punc", close));
			kids.appendChild(closeRow);

			group.appendChild(kids);
			node.appendChild(group);

			tw.addEventListener("click", function () {
				var collapsed = group.classList.toggle("collapsed");
				tw.textContent = collapsed ? "▸" : "▾";
			});
		} else {
			var valSpan;
			if (t === "string") { valSpan = el("span", "jv-str", JSON.stringify(value)); }
			else if (t === "number") { valSpan = el("span", "jv-num", String(value)); }
			else if (t === "boolean") { valSpan = el("span", "jv-bool", String(value)); }
			else { valSpan = el("span", "jv-null", "null"); }
			row.appendChild(valSpan);
			row.appendChild(el("span", "jv-type", t));
			appendBadge(row, mark.state);
			node.appendChild(row);
		}

		parent.appendChild(node);
	}
});
