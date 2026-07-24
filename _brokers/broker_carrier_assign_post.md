---
title: Carrier Assign
position_number: 4.15
type: post
description: /api/connect/broker/carrier/assign
parameters:
  - name: 
    content: 
content_markdown: |-
  Receive Carrier Assignment from the Broker
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "number": 10000,
          "carrier": {
            "name": "Trucking Co",
            "identifier": "12345566",
            "telephone": "",
            "email": "dispatch@test.email",
            "dot_number": "",
            "driver": {
              "name": "George Washington",
              "identifier": "T1246",
              "phone": "",
              "email": "driver@test.email"
            }
          }
        }
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/broker/carrier/assign
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
