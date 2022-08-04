import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String, required: true},
    birthDate:{type: String, required: true},
    gender: {type: String, required: true},
    address1: {type: String, required: true},
    address2: {type: String},
    city: {type: String, required: true},
    province: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    class: {type: String, required: true},
}, {timestamps: true});
mongoose.models = {}
module.exports =  mongoose.model("Registration", registrationSchema);