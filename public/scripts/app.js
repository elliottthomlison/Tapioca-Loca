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
    for(user of users) {
      $("<div>").text(item.name).appendTo($("bannerContainer"));
    }
  });;
});
