const router = require('express').Router();
const { routes } = require('..');
const Game = require("../model/Game")
const Movie = require("../model/Movie")
const fetch = require('node-fetch')
router.post('/submitresults', async (req, res) => {
    //getting data from frontend
    /**
     * get the data from front end in multiple vars we pass it to Game.find()
     * search in db with these data if its matchs we return data
     * else we return 404 
     */
    var data = {};
    const costRangeList = req.body.cost_range.match(/\d+/g);

    const minCost = parseInt(costRangeList[0]);
    const maxCost = parseInt(costRangeList[1]);

    const ageRangeList = req.body.age_range.match(/\d+/g);
    const minAge = parseInt(ageRangeList[0]);
    const maxAge = parseInt(ageRangeList[1]);
    const numParticipants = req.body.participants;

    console.log(numParticipants)
    console.log(req.body.games)
    if (req.body.games === "on") {
        try {
            var games;
            console.log(req.body['game-genres'])
            // console.log(minCost, maxCost)
            if (typeof req.body['game-genres'] === "undefined") {
                games = await Game.find({ cost: { $gt: minCost, $lt: maxCost } })
            }
            else {
                games = await Game.find({ 
                genre: { $in: req.body['game-genres'] }, 
                cost: { $gt: minCost, $lt: maxCost }, 
                age: { $lt: minAge }, 
                minPlayers: {$lt: numParticipants},  
                maxPlayers: {$gte: numParticipants} 
            })
            }
            var gameList = []
            for (i=0 ;i<=games.length-1;i++){
                gameList.push(games[i].name)
            }
            data['gamesBolean']= req.body.games;
            data["gamesList"] = gameList
        } catch (err) {
            console.log(err)
            res.status(400).send(err);
        }
    }
    if (req.body['mov-tv'] === "on") {
        try {
            var movies;
            console.log(req.body['mov-tv-genres'])
            movies = await Movie.find({ genre: { $in: req.body['mov-tv-genres'] } })
            var movieList = []
            for (i=0 ;i<=movies.length-1;i++){
                movieList.push(movies[i].name)
            }
            data['moviesBolean']= req.body['mov-tv'];
            data["moviesList"] = movieList

        } catch (err) {
            // you have to select 2 genres at the same time
            console.log(err)
            res.render('error', { err: err });
        }
    }

    if (req.body.exercises === "on") {
        try {
            var youtube_url;
            var exercises = req.body['exer-types']
            console.log(exercises.length)
            youtube_url = `https://www.youtube.com/results?search_query=${exercises}`

            console.log(youtube_url)
            data['exerices'] = youtube_url
        } catch (err) {
            // you have to select 2 genres at the same time
            console.log(err)
            res.render('error', { err: err });
        }
    }
    console.log(data)
    res.render('results',{response_front: data})
    // console.log(req.body['exer-types'])

    // const numParticipants = req.body.numParticipants;
    // const minAge = req.body.minAge; 
    // const maxAge = req.body.maxAge; 
    // const wantsGames = req.body.wantsGames; // boolean
    // const wantsExercises = req.body.wantsExercises// boolean
    // const wantsCooking = req.body.wantsCooking// boolean
    // const wantsMovTv = req.body.wantsMovTv// boolean
    // const gameGenres = req.body.gameGenres //array 
    // const costRangeList = req.body.cost_range.match(/\d+/g);

    // const minCost = parseInt(costRangeList[0]);
    // const maxCost = parseInt(costRangeList[1]);
    // console.log(maxCost)
    // const minCost = req.body.minCost
    // const maxCost = req.body.maxCost 
    // const exerTypes = req.body.exerTypes //array 
    // const mealTypes = req.body.mealTypes//array 
    // const movTvGenres = req.body.movTvGenres//array 


    // try {
    //     // const specificGames;
    //     // if (req.body.numParticipants>18){
    //     //     specificGames= await Game.find({})
    //     // }
    //     const specificGames = await Game.find(({age : {$lt :24, $gt : 17}}))
    //     const games = await Game.find({})
    //     const movies = await Movie.find({})
    //     res.json({
    //         data : games,movies
    //     })
    // }catch(err){
    //     console.log(err)
    //     res.status(400).send(err);
    // }

});
router.get('/', (req, res) => {
    res.render('index')
})
router.get('/results', (req, res) => {
    console.log(req.body)
    res.render('results')
})

module.exports = router;