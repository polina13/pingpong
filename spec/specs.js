describe('pingPong', function() {
  it("is false for a number that is not divisible by neither 5 or 3", function() {
    expect(pingPong(29)).to.equal(false);
  });

  it("is true for a number that is divisible by 3", function() {
    expect(pingPong(9)).to.equal("ping");

  });

  it("is true for a number that is divisible by 5", function() {
    expect(pingPong(10)).to.equal("pong");
  });

  it("is true for a number that is divisible by 3 and 5", function() {
    expect(pingPong(15)).to.equal("pingpong");

  });
});
