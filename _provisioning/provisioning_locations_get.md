---
title: Get Locations
position_number: 5.5
type: get
description: /api/provisioning/users/{id}/locations
parameters:
  - name: id
    content: The Vehichaul user id
content_markdown: |-
  Returns only the location fields for one user. Every location call returns this same shape.
left_code_blocks:
  - code_block: |-
      curl https://{subdomain}.vehichaul.com/api/provisioning/users/21/locations \
        -H 'Authorization: Token token="{provisioning-token}"'
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
