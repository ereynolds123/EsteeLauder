const mongoose = require("mongoose")

//API data scheme
const suscriberScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscriber: {
        type: String,
        required: true
    },
    subscribeDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Subscriber", suscriberScheme )