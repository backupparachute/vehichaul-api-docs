---
title: Customer Vehicle
position_number: 1.2
type: post
description: /api/connect/customer/vehicle
parameters:
  - name:
    content:
content_markdown: |-
  Adds a vehicle to inventory.
left_code_blocks:
  - code_block: |-
      {
        "vin": "KL8CB6S92EC562180",
        "make": "CHEVROLET",
        "model": "SPARK",
        "year": "2014",
        "origin": {
          "name": "String",
          "email": "email@email.com",
          "line1": "String",
          "line2": "String",
          "city": "St. Louis",
          "state": "MO",
          "zip": "63103",
          "identifier": "String",
          "splc": "string",
          "ref_key": "string",
          "dealer_code": "string",
          "ramp_code": "string",
          "phone": "3145551212"
        },
        "destination": {
          "name": "String",
          "email": "email@email.com",
          "line1": "String",
          "line2": "String",
          "city": "Chicago",
          "state": "IL",
          "zip": "60001",
          "identifier": "String",
          "splc": "string",
          "ref_key": "string",
          "dealer_code": "string",
          "ramp_code": "string",
          "phone": "6185551212"
        },
        "bay_location": "string",
        "order_number": "string"
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/customer/vehicle
    title: URL
    language: text
  - code_block: |2-
      201 Created
    title: Response
    language: json
  - code_block: |2-
      400 Bad Request
    title: Error
    language: json
---