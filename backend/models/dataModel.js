const mongoose = require("mongoose")
const { stringify } = require("querystring")

const dataSchema = new mongoose.Schema({
    temperature:{
        type:Number,
        required:[true, "Error Accessing Temperature"],
        default:0,
    },
    roomTemperature:{
        type:Number,
        required:[true,"Error Accessing Room Temperature"],
        default:0

    },
    heartBeat:{
        type:Number,
        required:[true,"Error Accessing Heart Beat"],
        default:0
    },
    normalPressure:{
        type:Number,
        default:0
    },
    oxygenLevel:{
        type:Number,
        default:0
    },
    user:{
        type : mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("BodyData",dataSchema);