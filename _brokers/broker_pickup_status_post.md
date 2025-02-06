---
title: Pickup Status
position_number: 4.2
type: post
description: /api/connect/broker/vehicle/pickups/status
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Pickup Status from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "connect_uid": 9868,
          "number": "15235",
          "pickup": {
            "signature": null,
            "bol": "http://URL_TO_BOL/bol.pdf",
            "inspector": "Cora Doneva",
            "picked_up_at": "2024-11-06T09:00:00.000-06:00",
            "gps": null,
            "remarks": null,
            "address": {
              "name": "AutoNation Ford Katy",
              "identifier": "2500",
              "line1": "20XXX KXXX Fwy",
              "city": "Katy",
              "state": "TX",
              "zip": "77450"
            }
          },
          "carrier": {
            "scac": "",
            "name": "MONTWAY",
            "driver": {
              "name": null,
              "identifier": null,
              "signature": null
            }
          },
          "vehicles": [
            {
              "connect_uid": "9240",
              "vin": "5FNRL3H9XXXXXX467",
              "order_number": "",
              "location": null,
              "color": null,
              "origin": {
                "connect_id": "autonation-189",
                "name": "AutoNation Ford Katy",
                "identifier": "2500",
                "ref_key": "autonation",
                "line1": "20777 Katy Fwy",
                "city": "Katy",
                "state": "TX",
                "zip": "77450"
              },
              "destination": {
                "connect_id": "autonation-322",
                "name": "AutoNation USA Katy",
                "identifier": "2924",
                "ref_key": "autonation",
                "line1": "15625 Katy Freeway",
                "city": "Houston",
                "state": "TX",
                "zip": "77094"
              }
            }
          ]
        }
      } 
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/broker/vehicle/pickup/status
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
