---
title: List Users
position_number: 5.1
type: get
description: /api/provisioning/users
parameters:
  - name: status
    content: OPTIONAL, `active`, `disabled` or `all`. Defaults to `active`
  - name: email
    content: OPTIONAL, exact email match. Finds deactivated users too
  - name: external_uid
    content: OPTIONAL, the user's id in your SSO directory
  - name: name
    content: OPTIONAL, matches any part of the name
  - name: location
    content: OPTIONAL, users who have this location code
  - name: updated_since
    content: OPTIONAL, ISO 8601 time. Users changed at or after this time
  - name: page
    content: OPTIONAL, defaults to 1
  - name: per_page
    content: OPTIONAL, defaults to 50, maximum 200
content_markdown: |-
  Returns a page of users sorted by name. Combine any of the filters.

  Use `email` or `external_uid` to find the Vehichaul `id` for a person in your directory. Every other call takes that `id`.
  {: .info}
left_code_blocks:
  - code_block: |-
      curl 'https://{subdomain}.vehichaul.com/api/provisioning/users?status=all&email=jsmith@example.com' \
        -H 'Authorization: Token token="{provisioning-token}"'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/provisioning/users?status=all&email=jsmith@example.com
    title: URL
    language: text
  - code_block: |-
      {
        "users": [
          {
            "id": 21,
            "username": "jsmith",
            "email": "jsmith@example.com",
            "name": "Jane Smith",
            "phone": null,
            "external_uid": "E12345",
            "status": "active",
            "disabled_at": null,
            "last_login_at": "2026-10-20T08:15:00.000-05:00",
            "last_activity_at": "2026-10-24T16:02:11.000-05:00",
            "all_locations": false,
            "locations": [
              {
                "code": "2500",
                "match_count": 1,
                "address": {
                  "id": 95,
                  "name": "AutoNation Ford Katy",
                  "line1": "20XXX KXXX Fwy",
                  "city": "Katy",
                  "state": "TX",
                  "zip": "77450"
                }
              }
            ],
            "tms_filters": []
          }
        ],
        "page": 1,
        "per_page": 50,
        "total": 1
      }
    title: Response
    language: json
---
