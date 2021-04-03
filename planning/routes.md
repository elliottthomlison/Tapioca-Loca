
<!-- get user when logged in, add, delete -->
R GET /users/:id
A POST /users
D POST /users/:id/delete

<!-- get staff phone number to send text -->
R GET /staff/:id
E GET /staff

<!-- read all menus or single menu -->
B GET /menus
R GET /menus/:id

<!-- read all items or detailed single item -->
B GET /items
R GET /items/:id

<!-- view cart, edit cart, add to cart -->
R GET /cart/:id
E POST /cart/:id
A POST /cart

<!-- view purchase order for owner and user, add purchase -->
R GET /purchase/:id
A POST /purchase

<!-- read text, edit text with query data, add/send text -->
R GET /text/:id
E POST /text/:id
A POST /text

<!-- Browse all orders, read specific order, edit order, add order when purchase is made, delete when order is fulfilled -->
B GET /active_orders
R GET /active_orders/:id
E POST /active_orders/:id
A POST /active_orders
D POST /active_orders/:id/delete

