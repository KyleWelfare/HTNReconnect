const mongoose = require ('mongoose');

const gameSchema= new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    }, 
    age : {
        type: Number,
        required: true ,
    },
    minPlayers: {
        type: Number,
        required: true ,
    },
    maxPlayers: {
        type: Number,
        required: true ,
    },
    cost :{
        type: Number,
        required: true ,

    },
    genre:{
        type:Array,
        required: true ,
    }

});

module.exports= mongoose.model('Game',gameSchema);