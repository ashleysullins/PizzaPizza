function Pizza(quantity, toppings, pieSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pieSize = pieSize;
}

var topping = 0.50;

Pizza.prototype.price = function() {
  return ((this.toppings * topping) + this.pieSize) * this.quantity;
}

function clearForm()
  {
    $(':checkbox').prop('checked', false);
  };


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    
    var pieSize = parseInt($("input[name=size]:checked").val());
    
    var toppings = 0;
    var totalToppingsArray = [];
      $(".toppings:checked").each(function() {
        totalToppingsArray[toppings++] = parseInt($(this).val());
      });
    
    var quantity = parseInt($("input[name=quantity]:checked").val()); 
    var order = new Pizza(quantity, toppings, pieSize);
    var total = order.price().toFixed(2);

      $(".amount").text(total);
      $("#result").show();
      
    clearForm();

    event.preventDefault();
  });
});