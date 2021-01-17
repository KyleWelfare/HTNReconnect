//games dropdown
// let gamesCheckbox = document.getElementById("games");
// let gamesSubForm = document.getElementById("games-genre-items");

// if (gamesCheckbox.checked) {
//   gamesSubForm.style.display = "block";
// } else {
//   gamesSubForm.style.display = "none";
// }

// $(function () {
//   $("#games").click(function (event) {
//     var x = $(this).is(":checked");
//     if (x == true) {
//       $(this).parents(".form-card").find(".game-genre-items").show();
//     } else {
//       $(this).parents(".form-card").find(".game-genre-items").hide();
//     }
//   });
// });

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

function showHideGames(checked) {
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
