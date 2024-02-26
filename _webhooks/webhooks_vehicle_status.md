---
title: Vehicle Status
position_number: 3.1
type: post
description: CUSTOMER DEFINED URL
parameters:
  - name:
    content:
content_markdown: |-
  Sends JSON webhook to customer defined URL
left_code_blocks:
  - code_block: |-
      {
        "vin": "1GKFK66837J344709",
        "status": "En Route",
        "load_number": 6472,
				"load_reference_number": "33dd34sdf4d",
				"order_number": "123456789",
        "assigned_at": "2023-10-18T19:24:55.000-05:00",
        "pickup_eta": "2023-10-30T00:16:03.000-05:00",
        "delivery_eta": null,
        "picked_up_at": "2023-10-30T00:12:20.000-05:00",
        "delivered_at": null
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      CUSTOMER DEFINED URL
    title: URL
    language: text
  - code_block: |2-
      200 OK
    title: Response
    language: json
---