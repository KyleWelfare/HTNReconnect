
//get url search string
const queryString = window.location.search;

//save url params as strings
const urlParams = new URLSearchParams(queryString);

//universal variables
const numParticipants = parseInt(urlParams.get("participants"));

const ageRange = urlParams.get("age_range");
const ageRangeList = [];
if (ageRange !== null) {
  ageRangeList = ageRange.match(/\d+/g);
}

let minAge = 0;
if (ageRangeList !== null) {
  minAge = parseInt(ageRangeList[0]);
}
let maxAge = 100;
if (ageRangeList !== null) {
  maxAge = parseInt(ageRangeList[1]);
}

// category checks
const wantsGames = urlParams.has("games");
const wantsExercises = urlParams.has("exercises");
const wantsCooking = urlParams.has("cooking");
const wantsMovTv = urlParams.has("mov-tv");

//game variables
const gameGenres = urlParams.getAll("game-genres");

const costRange = urlParams.get("cost_range");
const costRangeList = [];
if (costRange !== null) {
  costRangeList = costRange.match(/\d+/g);
}

let minCost = 0;
if (costRangeList !== null) {
  minCost = parseInt(costRangeList[0]);
}
let maxCost = 100;
if (costRangeList !== null) {
  maxCost = parseInt(costRangeList[1]);
}

//exercises variables
const exerTypes = urlParams.getAll("exer-types");

//cooking variables
const mealTypes = urlParams.getAll("meal-types");

//mov-tv variables
const movTvGenres = urlParams.getAll("mov-tv-genres");


//getting data from back-end
// let response_data = <%=  JSON.stringify (data) %>
// response_data.forEach(function(ele){
//     console.log(ele)
// } )
const data = document.getElementById("hidden-json").textContent;
const dataToJson= JSON.parse(data)
console.log(data)

//games card variables
const codeNames = document.getElementById("codenames");
const skribblIO = document.getElementById("skribblio");
const amongUs = document.getElementById("amongus");
const golfWithFriends = document.getElementById("golf");
const pubG = document.getElementById("pubg");
const fallGuys = document.getElementById("fallguys");
const sporcle = document.getElementById("sporcle");
const trivia = document.getElementById("trivia");
const overcooked = document.getElementById("overcooked");

//exercises card variables
const yogaBeg = document.getElementById("yogaBeginner");
const yogaEld = document.getElementById("yogaElders");
const flexFast = document.getElementById("flexibleFast");
const hiit = document.getElementById("hiit");
const karate = document.getElementById("karate");
const taekwondo = document.getElementById("taekwondo");
const rasputin = document.getElementById("rasputin");

//cooking card variables
const avoToast = document.getElementById("avocadoToast");
const chocCake = document.getElementById("chocolateCake");
const tahCookies = document.getElementById("tahiniCookies");
const falafel = document.getElementById("falafel");
const riceRoll = document.getElementById("riceRoll");
const muffins = document.getElementById("muffins");
const quesadillas = document.getElementById("quesadillas");
const lunchbox = document.getElementById("lunchbox");

//movies card variables
const modernFamily = document.getElementById("modernFamily");
const inception = document.getElementById("inception");
const howl = document.getElementById("howl");
const forrestGump = document.getElementById("forrestGump");
const jumanji = document.getElementById("jumanji");
const megamind = document.getElementById("megamind");
const americanMurder = document.getElementById("americanMurder");
const orphan = document.getElementById("orphan");
const monsterHouse = document.getElementById("monsterHouse");
const bandOfBrothers = document.getElementById("bandOfBrothers");

//card name arrays

//game card displays
if (dataToJson.gamesBolean==="on") {
  document.getElementById("games").style.display = "grid";
  if (games.includes("Codenames Online")) {
    codeNames.style.display = "block";
  }
  if (games.includes("Skribbl.io")) {
    skribblIO.style.display = "block";
  }
  if (dataToJson.gamesNames.includes("Among Us")) {
    amongUs.style.display = "block";
  }
  if (games.includes("Golf With Your Friends")) {
    golfWithFriends.style.display = "block";
  }
  if (games.includes("PLAYERUNKWOWN'S BATTLEGROUNDS")) {
    pubG.style.display = "block";
  }
  if (games.includes("Fall Guys")) {
    fallGuys.style.display = "block";
  }
  if (games.includes("Sporcle Quizzes")) {
    sporcle.style.display = "block";
  }
  if (games.includes("Trivia via Zoom")) {
    trivia.style.display = "block";
  }
  if (games.includes("Overcooked 2")) {
    overcooked.style.display = "block";
  }
} else {
  document.getElementById("games").style.display = "none";
}

//exercises card displays
if (wantsExercises === true) {
  document.getElementById("exercises").style.display = "grid";
  if (exercises.includes("Beginner Yoga")) {
    yogaBeg.style.display = "block";
  }
  if (exercises.includes("Elder Yoga")) {
    yogaEld.style.display = "block";
  }
  if (exercises.includes("Flexible Fast")) {
    flexFast.style.display = "block";
  }
  if (exercises.includes("HIIT")) {
    hiit.style.display = "block";
  }
  if (exercises.includes("Karate")) {
    karate.style.display = "block";
  }
  if (exercises.includes("Taekwondo")) {
    taekwondo.style.display = "block";
  }
  if (exercises.includes("Rasputin")) {
    rasputin.style.display = "block";
  }
} else {
  document.getElementById("exercises").style.display = "none";
}

//cooking card displays
if (wantsCooking === true) {
  document.getElementById("cooking").style.display = "grid";
} else {
  document.getElementById("cooking").style.display = "none";
}

//movie/tv card displays
if (wantsMovTv === true) {
  document.getElementById("movies").style.display = "grid";
} else {
  document.getElementById("movies").style.display = "none";
}
