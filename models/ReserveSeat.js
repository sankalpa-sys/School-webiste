import mongoose from "mongoose";

const reserveSeatSchema = new mongoose.Schema({
    name: {type: String, required: true},
    class: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true},
}, {timestamps: true});
mongoose.models = {}
module.exports =  mongoose.model("ReserveSeat", reserveSeatSchema);