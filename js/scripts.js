function Pizza(quantity, toppings, pieSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pieSize = pieSize;
}

var topping = 0.50;

Pizza.prototype.price = function() {
  return ((this.toppings * topping) + this.pieSize) * this.quantity;
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    
    var pizza = 0;
    var pizza2 = 0;
    var pizza3 = 0;
    var pizza4 = 0;
    
    var pieSize = parseInt($("input[name=size]:checked").val());
    var toppings = parseInt($("input[name=toppings]:checked").val());
    var quantity = parseInt($("input[name=quantity]:checked").val()); 
    var order = new Pizza(quantity, toppings, pieSize);
    var total = order.price();

      $(".amount").text(total);
      $("#result").show();

    event.preventDefault();
  });
});