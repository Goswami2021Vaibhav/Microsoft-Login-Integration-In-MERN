import User from "../models/User.model.js"
import jwt from 'jsonwebtoken'
export const Login = async (req, res) => {
    try {
        const { name, email, phoneNumber, avatar } = req.body
        let user
        user = await User.findOne({ email })
        if (!user) {
            const newUser = new User({
                name, email, phoneNumber, avatar
            })
            user = await newUser.save()
        }

        user = user.toObject({ getters: true })

        const token = jwt.sign(user, process.env.JWT_SECRET)

        res.cookie('access_token', token, {
            httpOnly: true
        })
        res.status(200).json({
            success: true,
            message: 'User login successfully.',
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error
        })
    }
}
export const getUser = async (req, res) => {
    try {
        const token = req.cookies.access_token
        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Token not found.",
            })
        }

        const user = jwt.verify(token, process.env.JWT_SECRET)
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error
        })
    }
}