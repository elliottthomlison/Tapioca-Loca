
<!-- get user when logged in, add, delete -->
R GET /users/:id
<!-- A POST /users
D POST /users/:id/delete -->

<!-- get staff phone number to send text -->
R GET /staff/:id
E POST /staff/:id

<!-- read all items or detailed single item (only need 1)-->
B GET /menu_items
R GET /menu_items/:id

<!-- view cart, edit cart, add to cart -->
R GET /cart/:id
E POST /cart/:id
<!-- A POST /cart -->

<!-- view order for owner and user, add order (for reciept, text, active orders) -->
R GET /order/:id
E POST /order/:id

<!-- read text, edit text with query data, add/send text -->
R GET /text/:id
E POST /text/:id
 new promise (restaurant verifies order)
 .then (send user text + setTimeout for "order ready text")
A POST /text

<!-- Browse all orders, read specific order, edit order, add order when purchase is made, delete when order is fulfilled -->
B GET /active_orders
E POST /active_orders/:id
D POST /active_orders/:id/delete

