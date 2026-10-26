---
title: Reactivate User
position_number: 5.4
type: post
description: /api/provisioning/users/{id}/activate
parameters:
  - name: id
    content: The Vehichaul user id
content_markdown: |-
  Turns a deactivated user back on. Their email and username go back to normal.

  Roles do not come back. Ask support to restore the user's roles after you reactivate them.
  {: .error}

  Reactivating an active user changes nothing and returns `200`.

  If someone else took the user's email or username while they were deactivated, the call returns `422` and the user stays deactivated.
left_code_blocks:
  - code_block: |-
      curl -X POST https://{subdomain}.vehichaul.com/api/provisioning/users/21/activate \
        -H 'Authorization: Token token="{provisioning-token}"'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/provisioning/users/21/activate
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
        "status": "active",
        "disabled_at": null,
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
            "reason": "invalid",
            "message": "Email has already been taken and Username has already been taken"
          }
        ]
      }
    title: 422 Unprocessable Entity
    language: json
---
