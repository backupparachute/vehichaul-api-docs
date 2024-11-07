---
title: Inspection Image
position_number: 4.6
type: post
description: /api/connect/broker/vehicle/inspection
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Inspection Image from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "connect_uid": 11595345,
          "number": "15316",
          "inspection": {
            "driver_name": "Zoderic Farmer",
            "driver_identifier": "ed8cce0e-7148-4fd4-b86a-XXXXXX",
            "image": "https://URL_TO_IMAGE_GOES_HERE",
            "code": null,
            "notes": null,
            "created_at": "2024-11-06T17:27:58.000-06:00",
            "pickup": true
          },
          "vehicle": {
            "connect_uid": "15316",
            "vin": "2GCEC19V7413XXXX",
            "order_number": "11595343",
            "location": "N/A",
            "color": null,
            "origin": {
              "connect_id": "acertus-3537",
              "name": "AUTONATION HYUNDAI NORTH FORT (AN)",
              "identifier": "58232",
              "ref_key": "acertus",
              "splc": "668200000",
              "line1": "7724 NE LOOP 820",
              "city": "FORT WORTH",
              "state": "TX",
              "zip": "76180"
            },
            "destination": {
              "connect_id": "acertus-218",
              "name": "AUTONATION AUTO AUCTION - HOUSTON",
              "identifier": "56334",
              "ref_key": "acertus",
              "splc": "684800000",
              "line1": "608 W. MITCHELL ROAD",
              "city": "HOUSTON",
              "state": "TX",
              "zip": "77037"
            }
          }
        }
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/broker/vehicle/inspection
    title: URL
    language: text
  - code_block: |2-
      202 Accepted
    title: Response
    language: json
  - code_block: |2-
      404 Not Found
    title: Error
    language: json
---
