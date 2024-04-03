---
title: Vehicle Release
position_number: 1.42
type: put
description: /api/connect/customer/vehicle/release
parameters:
  - name: vin
    content: Vehicle Identification Number
  - name: token
    content: OPTIONAL, you can supply the auth token in the `Authorization` header, or as a url param
content_markdown: |-
  This call can handle the auth token in the Authorization header, or as a url param.
  {: .info }

  Marks the vehicle as released.
left_code_blocks:
  - code_block: |-
      curl -X "PUT" https://{subdomain}.vehichaul.com/api/connect/customer/vehicle/release?vin=12345678901234567
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/customer/vehicle/release?vin=12345678901234567
    title: URL
    language: text
  - code_block: |2-
      200 OK
    title: Response
    language: json
  - code_block: |2-
      404 Not Found
    title: Error
    language: json
---
