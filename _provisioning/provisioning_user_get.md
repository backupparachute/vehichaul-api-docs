---
title: Get User
position_number: 5.2
type: get
description: /api/provisioning/users/{id}
parameters:
  - name: id
    content: The Vehichaul user id
content_markdown: |-
  Returns one user, active or deactivated.

  `tms_filters` lists area and region limits set in Vehichaul. A user with only `tms_filters` still has limited access, even with an empty `locations` list.
left_code_blocks:
  - code_block: |-
      curl https://{subdomain}.vehichaul.com/api/provisioning/users/22 \
        -H 'Authorization: Token token="{provisioning-token}"'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/provisioning/users/22
    title: URL
    language: text
  - code_block: |-
      {
        "id": 22,
        "username": "mlee",
        "email": "mlee@example.com",
        "name": "Morgan Lee",
        "phone": "555-555-0100",
        "external_uid": "E12346",
        "status": "active",
        "disabled_at": null,
        "last_login_at": null,
        "last_activity_at": null,
        "all_locations": false,
        "locations": [],
        "tms_filters": [
          {
            "type": "area",
            "name": "Houston"
          }
        ]
      }
    title: Response
    language: json
  - code_block: |-
      {
        "errors": [
          {
            "reason": "user_not_found",
            "message": "No user with that id"
          }
        ]
      }
    title: 404 Not Found
    language: json
---
