

$(document).ready(function () {
  $("form").submit(function (event) {

    var userInput = parseInt($("input#numbers").val());

event.preventDefault();
for(var i=1;i<=userInput;i++){
  if (i % 15=== 0){
    $("#answer").append('<li>'+"Pingpong"+'</li>');
  }else if(i % 5 === 0){
    $("#answer").append('<li>'+"Pong"+'</li>');

  }else if(i % 3 === 0){
    $("#answer").append('<li>'+"Ping"+'</li>');
  }else {
    $("#answer").append('<li>'+i+'</li>');
  }
}
    });
  });
