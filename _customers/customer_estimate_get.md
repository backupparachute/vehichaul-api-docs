---
title: Estimate
position_number: 1.1
type: get
description: /api/connect/customer/estimate
parameters:
  - name: pickup_zip
    content: Pickup Zipcode
  - name: destination_zip
    content: Destination Zip
  - name: category
    content: OPTIONAL, Valid values are Car, Truck, SUV, Van
  - name: token
    content: OPTIONAL, you can supply the auth token in the `Authorization` header, or as a url param
content_markdown: |-
  This call can handle the auth token in the Authorization header, or as a url param.
  {: .info }

  Returns a transporation estimate in JSON format if a rate is found for the zipcode lane provided.
left_code_blocks:
  - code_block: |-
      curl https://{subdomain}.vehichaul.com/api/connect/customer/estimate?pickup_zip=12345&destination_zip=63103
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/connect/customer/estimate?pickup_zip=12345&destination_zip=63103
    title: URL
    language: text
  - code_block: |2-
      {"id":"bf752528","price":"129.83","pickup_zip":"63124","destination_zip":"62062","category":null}
    title: Response
    language: json
  - code_block: |2-
      400 Bad Request
    title: Error
    language: json
---