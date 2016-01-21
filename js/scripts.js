var pingPong = function(number) {
  // var numbers = [];
  for (var i=0; i >= number; i+1){
    if(i % 3 === 0 && i % 5 === 0) {
      numbers.push("pingpong");
    }else if (i % 3 === 0) {
      numbers.push("ping");
    }else if (i % 5 === 0) {
      numbers.push("pong");
    }else {
      numbers.push(i);
    }
  }
  return numbers;
};

$(document).ready(function () {
  $("#submit").submit(function(event) {
    var number = parseInt($("input#inputnumber").val());
  });
  (event).preventDefault();
})
