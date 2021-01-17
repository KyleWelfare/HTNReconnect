const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

//universal variables
const numParticipants = parseInt(urlParams.get("participants"),10);
const ageRange = urlParams.get("age_range");

// category checks
const wantsGames = urlParams.has("games");
const wantsExercises = urlParams.has("exercises");
const wantsCooking = urlParams.has("cooking");
const wantsMovTv = urlParams.has("mov-tv");

//game variables
const gameGenres = urlParams.getAll("game-genres");
const costRange = urlParams.get("cost_range");

//exercises variables
const exerTypes = urlParams.getAll("exer-types");

//cooking variables
const mealTypes = urlParams.getAll("meal-types");

//mov-tv variables
const movTvGenres = urlParams.getAll("mov-tv-genres");

// Sending data to back-end in json
const sendData= async()=>{
    var data = {
        numParticipants,
        ageRange,
        wantsGames,
        wantsExercises,
        wantsCooking,
        wantsMovTv,
        gameGenres,
        costRange,
        exerTypes,
        mealTypes,
        movTvGenres
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/submitresults', options);
}

