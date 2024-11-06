---
title: Vehicle Pickup Status
position_number: 4.1
type: post
description: /api/connect/broker/vehicle/pickup/status
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Pickup Status from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "number": 15183,
          "reference_number": "",
          "carrier": {
            "scac": "",
            "name": "Montway",
            "indentifier": "E6",
            "driver": {
              "name": "XYZ TRUCKING",
              "identifier": "12345"
            }
          },
          "vehicles": [
            {
              "connect_uid": 9188,
              "vin": "2FAHP71V19XXXXXXX",
              "order_number": "",
              "location": null,
              "color": null,
              "payable": null,
              "origin": {
                "connect_id": "autonation-209",
                "name": "AutoNation Chevrolet West Austin",
                "identifier": "XXXX",
                "ref_key": "autonation",
                "line1": "1XX Research Blvd",
                "city": "Austin",
                "state": "TX",
                "zip": "78759"
              },
              "destination": {
                "connect_id": "autonation-29",
                "name": "AutoNation Auto Auction Houston",
                "identifier": "2933",
                "dealer_code": "",
                "ref_key": "autonation",
                "splc": "",
                "line1": "608 W Mitchell Road",
                "city": "Houston",
                "state": "TX",
                "zip": "77037"
              }
            }
          ]
        }
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/vehicle/pickup/status
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
