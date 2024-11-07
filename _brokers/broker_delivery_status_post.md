---
title: Delivery Status
position_number: 4.3
type: post
description: /api/connect/broker/vehicle/delivery/status
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Delivery Status from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "connect_uid": 9868,
          "number": "15235",
          "delivery": {
            "signature": null,
            "inspector": "Cora Doneva",
            "bol": "http://URL_FOR_BOL_GOES_HERE/bol.pdf",
            "delivered_at": "2024-11-06T15:00:00.000-06:00",
            "eta": null,
            "gps": null,
            "remarks": null,
            "address": {
              "name": "AutoNation USA Katy",
              "identifier": "2924",
              "line1": "15625 Katy Freeway",
              "city": "Houston",
              "state": "TX",
              "zip": "77094"
            }
          },
          "carrier": {
            "scac": "",
            "name": "Montway Auto Transport LLC",
            "identifier": "MONTWAY",
            "driver": {
              "name": null,
              "identifier": null,
              "signature": null
            }
          },
          "vehicles": [
            {
              "connect_uid": "9240",
              "vin": "5FNRL3H9XAB078467",
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
      https://{subdomain}.vehichaul.com/api/connect/broker/vehicle/delivery/status
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
