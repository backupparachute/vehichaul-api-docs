---
title: Authentication
position_number: 2
parameters:
  - name:
    content:
content_markdown: |-
  You need to be authenticated for all API requests. You will need to request an API token from support.

  We use Token authentication, add the API key to the Authorization header for all requests.
  
  You will also need the account subdomain, the following example is the base URL for each request:
  
  ```
  Authorization: Token token="{api-token}"
  
  GET https://{subdomain}.vehichaul.com/api/rest/...
  ```

  Nothing will work unless you include this API key
  {: .error}
left_code_blocks:
  - code_block:
    title:
    language:
right_code_blocks:
  - code_block:
    title:
    language:
  - code_block:
    title:
    language:
---