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
    
    var pieSize = parseInt($("input#size").val());
    var toppings = parseInt($("input#toppings").val());
    var quantity = parseInt($("input#quantity").val()); 
    var order = new Pizza(quantity, toppings, pieSize);
    var total = order.price();

      $(".total").text(total);
      $("#result").show();

    event.preventDefault();
  });
});