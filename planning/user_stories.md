# USER SCENARIOS ()

  # VIEW in_stock ITEMS
- Given that I'm logged in
- when I click menus
- I see in_stock items

  # ADD to CART
- Given that I'm logged in
- I can click "ADD TO CART"
- item will be added to cart

  # PURCHASE ITEMS and SEND SMS
- Given that I'm logged in
- I can view cart and click purchase
- stock of each items_ordered will be reduced by items_ordered
- SMS sent to owner with items_ordered

  # OWNER RECEIVE SMS and CONFIRM ORDER (Twilio)
- Given that I'm the owner
- when a purchase is made, I recieve a text with the items_ordered.
- If in_stock, return an SMS to user confirming order with order_time (longest item bill_time)

  # USER RECEIVE CONFIRMATION SMS (Twilio)
- Given that I'm a user who just ordered
- I recieve a confirmation SMS telling me how long until my order is ready.
- Set-Timeout to order_time - 5, send second SMS "Your order will be hot and ready for pick-up in 5 minutes!"





<!-- USER STORIES
- As a user
- I can check menus (with available stock)
- because I want to order

- As a user 
- I can add to cart
- because I might to purchase later

- As a user
- I can purchase items in my cart
- because I'd like to order stuff

- As an owner
- new purchase orders are automatically sent to my phone via SMS
- because I need to make food 
- AND verify orders

- As a user
- I recieve a confirmation with the order_time (longest item bill_time)
- Because I need to know that my order is confirmed
- AND when it will be ready -->
