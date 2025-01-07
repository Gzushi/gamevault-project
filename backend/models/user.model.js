import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            enum: ["user", "dev"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.statics.signup = async function (username, password, email) {
    const exist = await this.findOne({ email });

    if (exist) {
        throw Error("Email already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ username, password: hash, email });
    return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
