
# GET NEXT STEPS


# Routes
* plan routes 
* plan implementation
* Build routes with SQL queries
  * 1...
  * 2...
  * 3...
  * 4...
  * ..


# EJS / html page




# PostgreSQL 
* create database
* create tables
* INSERT INTO tables some data
* Define SELECT queries needed for app (find_user_cart, all_menus, menu_items_in_stock, solo_menu, text_message_for_owner, text_message_for_confrim, text_message_for_order_ready)
* Build queries


# CSS
* use SASS/scss

# Ajax

<!-- Notes for implementing Ajax -->

    if (cartItems.length > 0) {
      let url = "/cart/"
      const data = $(this).serialize();
      $.ajax({
        url: url,
        method: "POST",
        data: data,
      })
      .then((result) => {
        console.log("ajax callback called");
        loadCart();
      }).catch(err => {
        console.log("ajax error");
        console.log(err);
      });
    }
  })

    const loadCart = function() {
      $.ajax({
        url: "/cart/",
        type: "GET",
        dataType: "JSON"
      })
      .then((result) => {
        console.log("ajax GET callback called");
        console.log("result = ", result);
        renderCart(result); // We nee a function to render cart TABLE
      })
  };
  loadCart();
});
