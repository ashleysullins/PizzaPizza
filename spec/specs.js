describe('pizza', function() {
  it("make a small one topping pizza for $5.50", function() {
    var smallOneTopPizza = new Pizza(1, 1, 5);
    expect(smallOneTopPizza.price()).to.equal(5.50);
  });
  it("make a medium two topping pizzas for 9 dollars", function() {
    var medTwoTopPizza = new Pizza(1, 2, 8);
    expect(medTwoTopPizza.price()).to.equal(9);
  });
  it("make two large three topping pizzas for 25 dollars", function() {
    var twoLargeThreeTopPizza = new Pizza(2, 3, 11);
    expect(twoLargeThreeTopPizza.price()).to.equal(25);
  });
  it("make one large one topping pizza and two medium two topping pizzas for $29.50", function() {
    var oneLargeOneTopPizza = new Pizza(1, 1, 11);
    var twoMediumTwoTopPizza = new Pizza(2, 2, 8);
    expect(totalPrice()).to.equal(29.50);
  });
});
