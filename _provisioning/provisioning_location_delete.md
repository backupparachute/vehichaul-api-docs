---
title: Remove Location
position_number: 5.8
type: delete
description: /api/provisioning/users/{id}/locations/{code}
parameters:
  - name: id
    content: The Vehichaul user id
  - name: code
    content: The location code to remove. URL encode it. Codes with dots work as is
content_markdown: |-
  Removes one location code from a user. Removing a code the user does not have returns `200`. A blank code returns `422`.

  Removing the last code gives the user access to every location, unless they have `tms_filters`.
  {: .error}
left_code_blocks:
  - code_block: |-
      curl -X DELETE https://{subdomain}.vehichaul.com/api/provisioning/users/21/locations/2510 \
        -H 'Authorization: Token token="{provisioning-token}"'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/provisioning/users/21/locations/2510
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
