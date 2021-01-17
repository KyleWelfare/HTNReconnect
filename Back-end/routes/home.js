const router = require('express').Router();
const { routes } = require('..');
const Game= require("../model/Game")
const Movie= require("../model/Movie")
const fetch = require('node-fetch')
router.post('/submitresults',async(req,res)=>{
    //getting data from frontend
    /**
     * get the data from front end in multiple vars we pass it to Game.find()
     * search in db with these data if its matchs we return data
     * else we return 404 
     */
    res.json(req.body)
    console.log(req.body)

    const numParticipants = req.body.numParticipants;
    const ageRange = req.body.ageRange; 
    const wantsGames = req.body.wantsGames; // boolean
    const wantsExercises = req.body.wantsExercises// boolean
    const wantsCooking = req.body.wantsCooking// boolean
    const wantsMovTv = req.body.wantsMovTv// boolean
    const gameGenres = req.body.gameGenres //array 
    const costRange = req.body.costRange 
    const exerTypes = req.body.exerTypes //array 
    const mealTypes = req.body.mealTypes//array 
    const movTvGenres = req.body.movTvGenres//array 
    
    
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
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/results',(req,res)=>{
    res.render('results')
})

module.exports=router;