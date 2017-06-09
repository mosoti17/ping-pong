function pingpong(userInput) {
  var results = [];
  for(var i=1;i<=userInput;i++){
    if (i % 15=== 0){
      results.push("Pingpong");
    }else if(i % 5 === 0){
      results.push("pong")

    }else if(i % 3 === 0){
      results.push("ping")
    }else {
      results.push(i);
    }
}
 return results;
}
$(document).ready(function () {
  $("form").submit(function (event) {

    var userInput = parseInt($("input#numbers").val());
    var result = pingpong(userInput);
    result.forEach(function (output) {

event.preventDefault();
    });
  });
})
