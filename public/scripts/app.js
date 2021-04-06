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

  // ADD TO CART

  //     // add to local storage, push item to array
  //     // another function populates cart (render.items)
  //     // Gets through jquery, and iterates using for loop


$(document).on("click",".addItem",function() {
  // let row = $("#item1");
  let row = $(this).closest("tr");
  let storageArray = [];
  let cartArray = JSON.parse(localStorage.getItem("cartArray")) ?? [];

  if (typeof(Storage) !== "undefined") {
    // Store in storageArray
    localStorage.item_name = $(".itemName", row).text();
    localStorage.item_price = $(".itemPrice", row).text();
    storageArray.push(localStorage.item_name);
    storageArray.push(localStorage.item_price);
    localStorage.setItem("storageArray", JSON.stringify(storageArray));

    // Retrieve and print in cart
    const parent = document.getElementById("cartItemsContainer");
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdPrice = document.createElement("td");
    tdName.setAttribute("id", "resultName");
    tdPrice.setAttribute("id", "resultPrice");

    tdName.innerHTML = storageArray[0];
    tdPrice.innerHTML = storageArray[1];

    tr.prepend(tdPrice);
    tr.prepend(tdName);
    parent.prepend(tr);

  } else {
    document.getElementById("result2").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  cartArray.push(storageArray);
  console.log("cartArray = ", cartArray);
  localStorage.setItem("cartArray", JSON.stringify(cartArray));

});
// var parent = document.createElement("div");
// var p = document.createElement("p");
// var span = document.createElement("span");
// parent.append(p);
// parent.prepend(span);
{/* <tr>
<td id="resultName"></td><td id="resultPrice"></td>
</tr>
<tr>
<td id="resultName"></td><td id="resultPrice"></td>
</tr>
<tr>
<td id="resultName"></td><td id="resultPrice"></td>
</tr> */}




  // REMOVE FROM CART
  $(document).on("click",".removeItem",function() {
    alert("Remove item from cart");
  });
  // PURCHASE BUTTON
  $(document).on("click",".purchaseButton",function() {
  alert("Purchase item, send text to owner using Twilio");
  // AJAX post sends all items data in local storage to server side
  });
});


