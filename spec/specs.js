describe('pizza', function() {
  it("make a small one topping pizza for 5 dollars", function() {
    var smallOneTopPizza = new Pizza(1, 1, 5 );
    expect(smallOneTopPizza.price()).to.equal(5.50);
  });
});
