---
title: Load Create
position_number: 2.2
type: post
description: /api/rest/loads
parameters:
  - name:
    content:
content_markdown: |-
  Adds vehicles, assigns them to a load, assigns the load to carrier / driver
left_code_blocks:
  - code_block: |-
      {
        "load": {
          "carrier": {
            "scac": "ABCD",
            "name": "EPOD TEST CARRIER",
            "identifier": 123456,
            "telephone": "3143664000",
            "email": "testcarrier@gmail.com",
            "driver": {
              "identifier": "XYZ123",
              "name": "TEST DRIVER",
              "phone": "31423930900",
              "email": "test.driver@gmail.com"
            }
          },
          "vehicles": [
            {
              "model_ext": "328I 2DR CONVERTIBLE",
              "width": 67.3,
              "wheelbase": 106.3,
              "height": 53.1,
              "weight": 3362,
              "length": 174.5,
              "vin": "WBABK8320XXXXXX38",
              "make": "BMW",
              "model": "3 SERIES",
              "year": "1997",
              "color": null,
              "connect_id": null,
              "lot": null,
              "gate_pin": null,
              "auth_code": null,
              "customer": {
                "name": " TEST CUSTOMER",
                "identifier": "ABC123",
                "email": null
              },
              "origin": {
                "name": " TEST ORIGIN",
                "email": "test@gmail.com",
                "line1": "999 OLD LEMAY FERRY ROAD",
                "line2": "TEST ADDRESS LINE 2",
                "city": "IMPERIAL",
                "state": "MO",
                "zip": "63052",
                "hours": null,
                "identifier": 605044,
                "splc": "567832000",
                "ref_key": null,
                "dealer_code": null,
                "ramp_code": null,
                "phone": "1234567891",
                "contacts": [
                  {
                    "name": null,
                    "phone": null
                  }
                ]
              },
              "destination": {
                "name": " TEST DESTINATION",
                "email": "foobar@yahoo.com",
                "line1": "678  BEACH RD",
                "line2": "ADDRESS LINE 2 TEST LAST UPDATE",
                "city": "GULF SHORES",
                "state": "AL",
                "zip": "36533",
                "hours": "7am-5pm PU / DEL Business days only UPDATED",
                "identifier": 3434244,
                "splc": "1234",
                "ref_key": null,
                "dealer_code": null,
                "ramp_code": null,
                "phone": "4403922222",
                "contacts": [
                  {
                    "name": null,
                    "phone": null
                  }
                ]
              },
              "pickup_special_instructions": null,
              "delivery_special_instructions": "TEST DESTINATION COMMENT UPDATED",
              "location": null,
              "order_number": 11122233444,
              "pickup_eta": null,
              "delivery_eta": null,
              "po_num": null
            }
          ],
          "documents": [
            {
              "subject": "TESTGATEPASS3.pdf",
              "data_remote_url": "https://url-to-server.goes.here/TESTGATEPASS3.pdf",
              "filename": "12108731-TESTGATEPASS3.pdf"
            }
          ],
          "sti": false,
          "number": 12108731,
          "reference_number": null,
          "special_instructions": "",
          "dispatch_remarks": "DEFAULT TEST CUSTOMER COMMENT",
          "scheduled_pickup": null,
          "scheduled_delivery": null,
          "auth_code": null
        }
      }
    title: Request
    language: json
right_code_blocks:
  - code_block: |2-
      https://{subdomain}.vehichaul.com/api/rest/loads
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