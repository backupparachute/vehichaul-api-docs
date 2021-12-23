---
title: /vehicles
position_number: 1.1
type: post
description: Create Vehicle
parameters:
content_markdown: |-
  The vehicle will automatically be added to inventory
  {: .success}
  
  Base URL:
  `/api/request/vehicles`
  {: .info}
left_code_blocks:
  - code_block: |-

	 {
	 	"vin": "KL8CB6S92EC562180",
	 	"make": "CHEVROLET",
	 	"model": "SPARK",
	 	"year": "2014",
	 	"customer": {
	 		"name": "String",
	 		"identifier": "String or number"
	 	},
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
	 	"order_number": 
	 }
    title: Requesty Body
    language: json
right_code_blocks:
  - code_block: |-
      201 Created
    title: Response
    language: text
  - code_block: |-
      400 Bad Request
    title: Error
    language: text
---


