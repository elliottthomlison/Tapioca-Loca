$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/cart"
  }).done((cart) => {
    for(item of cart) {
      $("<div>").text(item.name).appendTo($("body"));
    }
  });;
});


// BUTTONS ON CLICK EVENT
$(document).ready(function() {
  // This WILL work because we are listening on the 'document',
  // for a click on an element with an ID of #test-element

  // ADD TO CART
  $(document).on("click",".addItem",function() {
      alert("SELECT * FROM menu_items");
  });
  // REMOVE FROM CART
  $(document).on("click",".removeItem",function() {
    alert("Remove item from cart");
  });
  // PURCHASE BUTTON
  $(document).on("click",".purchaseButton",function() {
  alert("Purchase item, send text to owner using Twilio");
  });
});


