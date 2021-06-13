const mongoose = require("mongoose");
const detailSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    phonenumber: {
        type: Number
    },
    address: {
        type: String
    },
    whatsappnumber: {
        type: Number
    }


});
module.exports = mongoose.model('Detail', detailSchema);