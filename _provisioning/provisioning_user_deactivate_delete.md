---
title: Deactivate User
position_number: 5.3
type: delete
description: /api/provisioning/users/{id}/deactivate
parameters:
  - name: id
    content: The Vehichaul user id
content_markdown: |-
  Cuts off a user's access right away. Vehichaul removes their roles, clears their saved login, resets their password to a random value and revokes their REST API token.

  Deactivating a user who is already deactivated changes nothing and returns `200`, so your script can retry safely.
  {: .info}

  The user's email and username stay reserved while they are deactivated. Responses show them as the person knows them.
left_code_blocks:
  - code_block: |-
      curl -X DELETE https://{subdomain}.vehichaul.com/api/provisioning/users/21/deactivate \
        -H 'Authorization: Token token="{provisioning-token}"'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/provisioning/users/21/deactivate
    title: URL
    language: text
  - code_block: |-
      {
        "id": 21,
        "username": "jsmith",
        "email": "jsmith@example.com",
        "name": "Jane Smith",
        "phone": null,
        "external_uid": "E12345",
        "status": "disabled",
        "disabled_at": "2026-10-26T10:46:59.000-05:00",
        "last_login_at": "2026-10-20T08:15:00.000-05:00",
        "last_activity_at": "2026-10-24T16:02:11.000-05:00",
        "all_locations": true,
        "locations": [],
        "tms_filters": []
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
