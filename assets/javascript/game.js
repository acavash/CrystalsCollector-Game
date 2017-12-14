$(document).ready(function() {
  var randomNumber = $("#randomNumber");
  var winsId = $("#wins");
  var lossesId = $("#losses");
  var totalScore = $("#totalScore");
  var total = 0;
  var wins = 0;
  var losses = 0;
  //This function will generate a random number from the minimum value to the maximum value
  var numGenerate = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  var randomGeneratedNumber = numGenerate(19, 120);
  $(randomNumber).append(randomGeneratedNumber);
  //Crystal Values from 1-12
  var random1 = numGenerate(1, 12);
  var random2 = numGenerate(1, 12);
  var random3 = numGenerate(1, 12);
  var random4 = numGenerate(1, 12);

  //Refresh is the function that will refresh the value everytime the user wins or loses
  var refresh = function() {
    random1 = numGenerate(1, 12);
    random2 = numGenerate(1, 12);
    random3 = numGenerate(1, 12);
    random4 = numGenerate(1, 12);
  };
  //Total Score displayer
  $(totalScore).html("Your total score is: " + total);

  // The total score adds to the user clicks and after it runs the check function
  $("#blue-crystal").on("click", function() {
    total += random1;
    $(totalScore).html("Your total score is: " + total);
    check();
  })

  $("#orange-crystal").on("click", function() {
    total += random2;
    $(totalScore).html("Your total score is: " + total);
    check();
  })
  $("#purple-crystal").on("click", function() {
    total += random3;
    $(totalScore).html("Your total score is: " + total);
    check();
  })
  $("#red-diamond").on("click", function() {
    total += random4;
    $(totalScore).html("Your total score is: " + total);
    check();
  })

  //The check function checks if user total score matches the random number
  var check = function() {
    if (randomGeneratedNumber == total) {
      wins++;
      $(winsId).html("Wins: " + wins);
      $(randomNumber).empty();
      randomGeneratedNumber = numGenerate(19, 121);
      $(randomNumber).html(randomGeneratedNumber);
      total = 0;
      $(totalScore).html("Your total score is: " + total)
      refresh();
    }
    if (randomGeneratedNumber < total) {
      losses++;
      $(lossesId).html("Losses: " + losses);
      $(randomNumber).empty();
      randomGeneratedNumber = numGenerate(19, 121);
      $(randomNumber).html(randomGeneratedNumber);
      total = 0;
      $(totalScore).html("Your total score is: " + total)
      refresh();
    }
  }
})
