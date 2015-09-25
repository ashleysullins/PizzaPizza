function Pizza(quanity, toppings, pieSize) {
  this.quanity = quanity;
  this.toppings = toppings;
  this.pieSize = pieSize;
}

var topping = 0.50;
var small = 5.00;
var medium = 8.00;
var large = 12.00;

Pizza.prototype.price = function() {
  return ((this.toppings * topping) + this.pieSize) * this.quanity;
}

//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
