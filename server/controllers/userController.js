const User = require("../models/userModel");


async function CreateAccount(req,res) {
    try {
        const {bankName, balance, accountType, ifscCode, openingDate, mobileNumber} = req.body;
        if (!bankName || !balance || !accountType || !ifscCode || !openingDate || !mobileNumber) {
            return res.status(400).json({message: "All fields are required"});
        }
        const user = new User({
            bankName,
            balance,
            accountType,
            ifscCode,
            openingDate,
            mobileNumber
        })
        await user.save();
        return res.status(201).json({message: "Account created successfully", user});
    } catch (error) {
        console.log("Error creating account", error);
        return res.status(500).json({message: "Internal server error", error});
        
    }
    
}

module.exports = {
    CreateAccount
}