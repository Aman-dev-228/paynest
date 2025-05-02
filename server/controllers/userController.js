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

async function GetAccount(req,res) {

    try {
        const {mobileNumber} = req.body;
        if (!mobileNumber) {
            return res.status(400).json({message: "Mobile number is required"});
        }
        const user = await User.find({mobileNumber});
        if(user.length <=0){
            return res.status(404).json({message:"User not found"})
        }
        else{
            return res.status(200).json({message: "No account details found with the given mobile number", user});

        }
        
    } catch (error) {
        return res.status(500).send({message: "Error while Fetching data", error})
        
    }
}



module.exports = {
    CreateAccount,
    GetAccount
}