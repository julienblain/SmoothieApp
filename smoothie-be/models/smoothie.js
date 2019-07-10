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
            quantité:{
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
    },
    description:{
        type:String,
    },
    steps:[
        {
            stepText:{
                type:String,
            }, 
        },
    ], 
    photo:[
        {
            titre:String,
            path:String,
            description:String,
        }
    ],
});

//smoothie est une sorte d'alias de catalog (il aurait fallu appeler la collection smoothies)
const Smoothie = module.exports = mongoose.model('smoothie', smoothieSchema, 'catalog');
