const mongoose = require("mongoose");
// const env = require("../config/env");

const options = { timestamps: true };
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            require: true,
            trim: true,
        },
        
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    options
);

// #region methods

// * toJSON
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;

    return userObject;
};

const User = mongoose.model("User", userSchema);

module.exports = User;