---
title: Vehicle Damage Image
position_number: 4.7
type: post
description: /api/connect/broker/vehicle/damage
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Damage Image from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "connect_uid": 11592103,
          "number": "15254",
          "damage": {
            "driver_name": "leonardo tundidor",
            "driver_identifier": "0d32b94a-f4c5-4242-9f19-f519deda4cd1",
            "image": "https://URL_TO_IMAGE_GOES_HERE",
            "notes": "Front bumper lip scratch driver side ",
            "codes_consolidated": "03-12-3",
            "damage_area_code": "03",
            "damage_type_code": "12",
            "damage_severity_code": "3",
            "created_at": "2024-11-06T14:56:28.000-06:00",
            "pickup": true
          },
          "vehicle": {
            "connect_uid": "15254",
            "vin": "1FT8W2BT9RXXXXXX7",
            "order_number": "11592099",
            "location": "N/A",
            "color": null,
            "origin": {
              "connect_id": "acertus-2059",
              "name": "AUTONATION FORD VALENCIA (AN)",
              "identifier": "57671",
              "ref_key": "acertus",
              "splc": "883538000",
              "line1": "23920 CREEKSIDE ROAD",
              "city": "VALENCIA",
              "state": "CA",
              "zip": "91355"
            },
            "destination": {
              "connect_id": "acertus-3568",
              "name": "AUTONATION FORD GULF",
              "identifier": "57021",
              "ref_key": "acertus",
              "splc": "684800000",
              "line1": "12227 GULF FREEWAY",
              "city": "HOUSTON",
              "state": "TX",
              "zip": "77034"
            }
          }
        }
      } 
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/broker/vehicle/damage
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
