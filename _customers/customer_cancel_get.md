---
title: Status
position_number: 1.4
type: delete
description: /api/connect/customer/vehicle
parameters:
  - name: vin
    content: Vehicle Identification Number
  - name: token
    content: OPTIONAL, you can supply the auth token in the `Authorization` header, or as a url param
content_markdown: |-
  This call can handle the auth token in the Authorization header, or as a url param.
  {: .info }

  Cancels transportation for a VIN, this will be rejected if the VIN has already been picked up.
left_code_blocks:
  - code_block: |-
      curl https://{subdomain}.vehichaul.com/api/connect/customer/vehicle?vin=12345678901234567
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/customer/vehicle?vin=12345678901234567
    title: URL
    language: text
  - code_block: |2-
      {"status":"cancelled successfully"}
    title: Success Response
    language: json
  - code_block: |2-
      {"status":"rejected"}
    title: Rejected Response
    language: json
  - code_block: |2-
      404 Not Found
    title: Error
    language: json
---
