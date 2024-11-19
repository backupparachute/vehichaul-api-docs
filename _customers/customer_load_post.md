---
title: Load Create
position_number: 1.5
type: post
description: /api/connect/customer/load
parameters:
  - name:
    content:
content_markdown: |-
  Creates a Load with multiple vehicles and optional split load with diversion.
left_code_blocks:
  - code_block: |-
      {
      	"load": {
      		"carrier": {
      			"name": "Trucking Co",
      			"identifier": "12345566",
      			"telephone": "",
      			"email": ""
      		},
      		"vehicles": [
      			{
      				"model_ext": "ALTITUDE 4X2 *LTD AVAIL*",
      				"width": "76.5",
      				"wheelbase": "114.8",
      				"height": "69.3",
      				"weight": "4545",
      				"length": "189.8",
      				"vin": "1C4RJEAGXHC943682",
      				"make": "JEEP",
      				"model": "GRAND CHEROKEE",
      				"year": "2017",
      				"color": null,
      				"origin": {
      					"name": "#7193",
      					"email": null,
      					"line1": "965 E I-65 SERVICE ROAD S",
      					"line2": null,
      					"city": "MOBILE",
      					"state": "AL",
      					"zip": "36606",
      					"hours": "DRIVER MUST CONTACT ACERTUS TO SCHEDULE APPOINTMENT FOR PICK UP OR DELIVERY",
      					"identifier": 97799,
      					"phone": "",
      					"special_instructions": ""
      				},
      				"destination": {
      					"name": " - SOUTHLAKE",
      					"email": null,
      					"line1": "3100 MT ZION PARKWAY",
      					"line2": null,
      					"city": "STOCKBRIDGE",
      					"state": "GA",
      					"zip": "30281",
      					"hours": "",
      					"identifier": 482829,
      					"phone": "",
      					"special_instructions":""
      				},
      				"location": "bay location",
      				"order_number": "your custom order number",
      				"pickup_eta": "2024-02-12T17:00:00.000Z",
      				"delivery_eta": "2024-02-13T17:01:00.000Z"
      			}
      		],
      		"documents": [
      			{
      				"subject": "SuperImportant.pdf",
      				"data_remote_url": "http://urlgoeshere.com/test.pdf",
      				"filename": "9786391-super-important.pdf"
      			}
      		],
      		"diversion": {
      			"first_leg": {
      				"reference_number":"",
      				"on_hold":"false",
      				"lane":"",
							"po_num:",
      				"priority":"",
      				"special_instructions":""
      			},
      			"last_leg":{
      				"reference_number":"",
      				"on_hold":"false",
      				"lane":"",
							"po_num:",
      				"priority":"",
      				"special_instructions":""
      			},
      			"address": {
      				"name": "- SOUTHLAKE",
      				"email": null,
      				"line1": "4 Purple Drive",
      				"line2": null,
      				"city": "STOCKBRIDGE",
      				"state": "GA",
      				"zip": "30281",
      				"hours": "",
      				"identifier": "334444845",
      				"phone": "7",
      				"special_instructions":""
      			}
      		},
      		"reference_number": "custom ref number",
      		"special_instructions": "",
      		"scheduled_pickup": "2024-02-12T17:00:00.000Z",
      		"scheduled_delivery": "2024-02-13T17:01:00.000Z",
      		"lane": "",
					"po_num: "",
      		"priority":"",
          "on_hold":"false"
      	}
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/customer/load
    title: URL
    language: text
  - code_block: |2-
      202 Accepted
    title: Response
    language: json
  - code_block: |2-
      400 Bad Request
    title: Error
    language: json
---
