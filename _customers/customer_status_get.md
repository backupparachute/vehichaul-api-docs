---
title: Vehicle Status
position_number: 1.3
type: get
description: /api/connect/customer/vehicle
parameters:
  - name: vin
    content: Vehicle Identification Number
  - name: token
    content: OPTIONAL, you can supply the auth token in the `Authorization` header, or as a url param
content_markdown: |-
  This call can handle the auth token in the Authorization header, or as a url param.
  {: .info }

  Returns a transporation estimate in JSON format if a rate is found for the zipcode lane provided.
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
      {"vin":"12345678901234567","status":"Delivered","load_number":12345667,"assigned_date":"2022-04-22T07:37:03.000-05:00","pickup_eta":"2022-04-22T05:59:00.000-05:00","delivery_eta":"2022-04-22T10:45:00.000-05:00","picked_up_at":"2022-04-22T07:59:00.000-05:00","delivered_at":"2022-04-22T10:59:00.000-05:00"}
    title: Response
    language: json
  - code_block: |2-
      404 Not Found
    title: Error
    language: json
---
