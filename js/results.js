//get url search string
const queryString = window.location.search;

//save url params as strings
const urlParams = new URLSearchParams(queryString);

//universal variables
const numParticipants = parseInt(urlParams.get("participants"));

const ageRange = urlParams.get("age_range");
const ageRangeList = ageRange.match(/\d+/g);

const minAge = parseInt(ageRangeList[0]);
const maxAge = parseInt(ageRangeList[1]);

// category checks
const wantsGames = urlParams.has("games");
const wantsExercises = urlParams.has("exercises");
const wantsCooking = urlParams.has("cooking");
const wantsMovTv = urlParams.has("mov-tv");

//game variables
const gameGenres = urlParams.getAll("game-genres");

const costRange = urlParams.get("cost_range");
const costRangeList = costRange.match(/\d+/g);

const minCost = parseInt(costRangeList[0]);
const maxCost = parseInt(costRangeList[1]);

//exercises variables
const exerTypes = urlParams.getAll("exer-types");

//cooking variables
const mealTypes = urlParams.getAll("meal-types");

//mov-tv variables
const movTvGenres = urlParams.getAll("mov-tv-genres");
