import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(404).json({ message: "User not found" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullname,
            email,
            password: hashedPassword
        });
        await createdUser.save();
        res.status(201).json({ user: "user added successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const Login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email
        });
        const ismatch = await bcrypt.compare(password, user.password);
        if (!user || !ismatch) {
            return res.status(404).json({ message: "invaild  user or password" });
        } else {
            res.status(200).json({
                message: "login successful",
                user: {
                    fullname: user.fullname,
                    email: user.email,
                    _id: user._id
                }
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}