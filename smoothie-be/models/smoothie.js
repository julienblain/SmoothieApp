const mongoose = require('mongoose');
const smoothieSchema = mongoose.Schema({
    title:{
        type:String,
        required:false,
        },
    ingredients:  [
        {
            nom:{
                type:String,
                required:false,
            },
            quantity:{
                type:String,
                required:false,
            },
        }
    ],
    features:{
            cost:{
                type:String,
                required:false
            }, 
            prepareTime:{
                type:String,
                required:false
            },
    },
    advice:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    steps:[
        {
            stepText:{
                type:String,
                required:false
            }, 
        },
    ], 
    photo: {
        type:String
    }
});

//smoothie est une sorte d'alias de catalog (il aurait fallu appeler la collection smoothies)
const Smoothie = module.exports = mongoose.model('smoothie', smoothieSchema, 'catalog');
