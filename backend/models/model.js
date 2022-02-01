const mongoose = require("mongoose");

const channelSchema= new mongoose.Schema({

        email: {
        type: String,
        required: true,
        trim: true,
        unique: true
        },

        hin: {
        type: String,
        required: true,
        trim: true,
        unique: true
        },

        password: {
            type: String,
            required: true,
            trim: true,
        },
    
        firstName:{
            type: String,
            required: true,
            trim: true,        
        },

        lastName:{
                type: String,
                required: true,
                trim: true,
        },

        role:{
                type: String,
                required: true,
                trim: true,
        }
})


const channelModel=mongoose.model("Channel",channelSchema)
module.exports=channelModel