---
title: Replace Locations
position_number: 5.7
type: put
description: /api/provisioning/users/{id}/locations
parameters:
  - name: id
    content: The Vehichaul user id
  - name: codes
    content: The complete list of location codes the user should have
content_markdown: |-
  Sets a user's locations to exactly the codes you send. Vehichaul removes codes missing from the list and adds new ones. Use this call to sync a user from your directory.

  Codes fail the same way as Add Locations. If one code fails, nothing changes.
  {: .info}

  An empty list removes every code. A user with no locations and no `tms_filters` sees every location.
  {: .error}

  This call never changes `tms_filters`.
left_code_blocks:
  - code_block: |-
      {
        "codes": ["2500"]
      }
    title: Request
    language: json
  - code_block: |-
      curl -X PUT https://{subdomain}.vehichaul.com/api/provisioning/users/21/locations \
        -H 'Authorization: Token token="{provisioning-token}"' \
        -H 'Content-Type: application/json' \
        -d '{"codes": ["2500"]}'
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
          }
        ],
        "tms_filters": []
      }
    title: Response
    language: json
---
