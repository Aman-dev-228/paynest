const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    bankName:{
        type: String,
        required: true,
    },
    balance:{
        type: Number,
        required: true,
    },
    accountType:{
        type: String,
        required: true,
    },
    ifscCode:{
        type: String,
        required: true,
    },
    openingDate:{
        type: Date,
        required: true,
        default: Date.now,
    },
    mobileNumber:{
        type: Number,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;