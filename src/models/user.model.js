const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: [true, "Username is required"],
    },
    firstname: {
        type: String,
        minlenght: 3,
        maxlenght: 30,
    },
    email: {
        type: String,
        unique: true,
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User;