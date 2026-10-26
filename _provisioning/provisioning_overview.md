---
title: Overview
position_number: 5.0
parameters:
  - name:
    content:
content_markdown: |-
  Manage your Vehichaul users from your own IT scripts. Turn access on and off, and control which locations each user sees.

  This API uses its own token. Request a provisioning token from support. A other types of tokens do not work here, and the provisioning token does not work on any other Vehichaul API.
  {: .info}

  Send the token in the Authorization header on every request.

  `Authorization: Token token="{provisioning-token}"`
  {: .info}

  `https://{subdomain}.vehichaul.com/api/provisioning/...`
  {: .info}

  Tokens can expire. Support can issue a new token at any time, and the old one stops working right away.
  {: .error}

  #### Locations

  A location is an address code, the `identifier` on a Vehichaul address. Each user response carries three location fields.

  | Field | Meaning |
  | --- | --- |
  | `all_locations` | `true` when the user has no location limits and sees every location |
  | `locations` | The address codes this API manages, with the address each code matched |
  | `tms_filters` | Area and region limits set in Vehichaul. You can read them here, but only Vehichaul can change them |

  A user with no locations and no `tms_filters` sees every location. Removing a user's last code gives them access to all locations, not to none.
  {: .error}

  Two addresses can share a code. The API picks the oldest active address and returns `match_count` so you can spot a shared code.

  #### Errors

  Every error body has the same shape.

  | Code | Reason | When |
  | --- | --- | --- |
  | 401 | `unauthorized` | Missing, wrong or expired token |
  | 403 | `forbidden` | The account has expired, or support has not turned this API on |
  | 404 | `user_not_found` | No user has that id |
  | 422 | `invalid` | The body is missing `codes`, or a save failed |
  | 422 | `not_found`, `inactive` | A location code did not resolve. See Add Locations |

  Vehichaul keeps a record of every change you send, with the body and the response code.
left_code_blocks:
  - code_block: |-
      curl https://{subdomain}.vehichaul.com/api/provisioning/users \
        -H 'Authorization: Token token="{provisioning-token}"'
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |-
      {
        "errors": [
          {
            "reason": "unauthorized",
            "message": "Bad or expired token"
          }
        ]
      }
    title: Error
    language: json
---
