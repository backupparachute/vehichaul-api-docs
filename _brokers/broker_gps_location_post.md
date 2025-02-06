---
title: GPS Location
position_number: 4.8
type: post
description: /api/connect/broker/vehicle/locations
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Damage Image from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "connect_uid": 11599661,
          "number": "6038",
          "reference_number": null,
          "gps_location": {
            "name": null,
            "lat": 34.0926,
            "longitude": -117.704,
            "created_at": "2024-11-07T23:48:42Z",
            "reported_at": "2024-11-07T23:48:42Z",
            "accuracy": 19,
            "units": "M",
            "source": "ELD"
          },
          "carrier": {
            "scac": "",
            "name": "SEVEN SIX O TRANSPORT LLC",
            "indentifier": "321374",
            "driver": {
              "name": "Luis Rocha",
              "identifier": "462d175b-d592-499f-bda6-XXXXXX"
            }
          }
        }
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/broker/vehicle/location
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
