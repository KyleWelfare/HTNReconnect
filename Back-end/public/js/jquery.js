/* index.js built by Kyle Welfare on 01/16/2021 for Hack The North 2020++. Provides simple js functions
for index.html of Reconnect Web App */

//clear form inputs on load
$(window).bind("pageshow", function () {
  var form = $("form");
  // let the browser natively reset defaults
  form[0].reset();
});

// expand form components on checkbox click
function showHideGames(checked) {
  if (checked) {
    $("#game-genre-items").fadeIn(700);
    document.getElementById("game-genre-items").style.display = "grid";
    $(".cost-range-container").fadeIn(700);
    //  $("#cost-range-slider").fadeIn(700);
  } else {
    $("#game-genre-items").fadeOut(300);
    $(".cost-range-container").fadeOut(300);
    //  $("#cost-range-slider").fadeOut(300);
  }
}

function showHideGameGenres(checked) {
  if (checked) {
    $("#game-genre-items").fadeIn(600);
    document.getElementById("game-genre-items").style.display = "grid";
    $(".cost-range-container").fadeIn(600);
    //  $("#cost-range-slider").fadeIn(700);
  } else {
    $("#game-genre-items").fadeOut(300);
    $(".cost-range-container").fadeOut(300);
    //  $("#cost-range-slider").fadeOut(300);
  }
}

function showHideExercises(checked) {
  if (checked) {
    $(".exer-types-container").fadeIn(600);
  } else {
    $(".exer-types-container").fadeOut(300);
  }
}

function showHideMealTypes(checked) {
  if (checked) {
    $(".meal-types-container").fadeIn(600);
  } else {
    $(".meal-types-container").fadeOut(300);
  }
}

function showHideMovTVGenres(checked) {
  if (checked) {
    $("#mov-tv-genre-items").fadeIn(600);
    document.getElementById("mov-tv-genre-items").style.display = "grid";
  } else {
    $("#mov-tv-genre-items").fadeOut(300);
  }
}

//scroll indicator arrow control
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    document.getElementById("scroll-arrow").style.visibility = "hidden";
  } else {
    document.getElementById("scroll-arrow").style.visibility = "visible";
  }
});

//ion Custom Range Slider formatting
$("#age-range-slider").ionRangeSlider({
  min: 0,
  max: 60,
  from: 0,
  to: 25,
  type: "double",
  max_postfix: "+",
  postfix: " years",
  skin: "flat",
});

$("#cost-range-slider").ionRangeSlider({
  min: 0,
  max: 100,
  from: 0,
  to: 30,
  type: "double",
  max_postfix: "+",
  prefix: "$",
  skin: "flat",
});
