---
title: Load Cancel
position_number: 1.52
type: delete
description: /api/connect/customer/load
parameters:
  - name: number
    content: Load number
  - name: reference_number
    content: Custom reference number set during load creation
  - name: token
    content: OPTIONAL, you can supply the auth token in the `Authorization` header, or as a url param
content_markdown: |-
  This call can handle the auth token in the Authorization header, or as a url param.
  {: .info }

  Cancels the load if applicable.
left_code_blocks:
  - code_block: |-
      curl -X "PUT" https://{subdomain}.vehichaul.com/api/connect/customer/load?number=123456
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/customer/load?number=123456
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
