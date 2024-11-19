---
title: Delivery Status
position_number: 4.5
type: post
description: /api/connect/broker/vehicle/delivery/eta
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Vehicle Delivery ETA updates from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "connect_uid": 9887,
          "number": "15271",
          "delivery": {
            "eta": "2024-11-07T14:00:00.000-06:00",
            "gps": null,
            "remarks": null,
            "address": {
              "name": "AutoNation Toyota South Austin",
              "identifier": "2571",
              "dealer_code": "",
              "splc": "",
              "line1": "4800 IH 35 South",
              "city": "Austin",
              "state": "TX",
              "zip": "78745"
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
              "connect_uid": "9276",
              "vin": "5N1BT3AB2RC673106",
              "order_number": "",
              "location": null,
              "color": null,
              "origin": {
                "connect_id": "autonation-659",
                "name": "Manheim Houston",
                "identifier": "",
                "ref_key": "autonation",
                "line1": "14450 West Road",
                "city": "Houston",
                "state": "TX",
                "zip": "77041"
              },
              "destination": {
                "connect_id": "autonation-210",
                "name": "AutoNation Toyota South Austin",
                "identifier": "2571",
                "dealer_code": "",
                "ref_key": "autonation",
                "splc": "",
                "line1": "4800 IH 35 South",
                "city": "Austin",
                "state": "TX",
                "zip": "78745"
              }
            }
          ]
          }
      } 
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/broker/vehicle/delivery/eta
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