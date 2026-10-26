---
title: Add Locations
position_number: 5.6
type: post
description: /api/provisioning/users/{id}/locations
parameters:
  - name: id
    content: The Vehichaul user id
  - name: codes
    content: List of location codes to add
content_markdown: |-
  Adds location codes to a user and keeps the codes they already have. Sending a code the user already has does nothing.

  Vehichaul checks every code before it saves anything. If one code fails, the call returns `422` with a reason for each bad code, and the user's locations stay as they were.
  {: .info}

  | Reason | Meaning |
  | --- | --- |
  | `not_found` | No address uses the code. A blank code also fails this way |
  | `inactive` | Every address with the code is deactivated |
  | `invalid` | `codes` is missing or is not a list |
left_code_blocks:
  - code_block: |-
      {
        "codes": ["2500", "2510"]
      }
    title: Request
    language: json
  - code_block: |-
      curl -X POST https://{subdomain}.vehichaul.com/api/provisioning/users/21/locations \
        -H 'Authorization: Token token="{provisioning-token}"' \
        -H 'Content-Type: application/json' \
        -d '{"codes": ["2500", "2510"]}'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/provisioning/users/21/locations
    title: URL
    language: text
  - code_block: |-
      {
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
          },
          {
            "code": "2510",
            "match_count": 2,
            "address": {
              "id": 96,
              "name": "AutoNation Toyota Katy",
              "line1": "21XXX KXXX Fwy",
              "city": "Katy",
              "state": "TX",
              "zip": "77450"
            }
          }
        ],
        "tms_filters": []
      }
    title: Response
    language: json
  - code_block: |-
      {
        "errors": [
          {
            "code": "9999",
            "reason": "not_found",
            "message": "No address uses the code 9999."
          },
          {
            "code": "2300",
            "reason": "inactive",
            "message": "2300 belongs to an address that is no longer active."
          }
        ]
      }
    title: 422 Unprocessable Entity
    language: json
---
