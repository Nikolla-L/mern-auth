const User = require('../models/User');

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;

    try {
        const user = await User.create({
            username, email, password
        });

        res.status(201).json({succes: true, user});
    } catch (error) {
        res.status(500).json({succes: false, error});
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).send({success: false, error: 'Please provide email and passowrd'});
    }

    try {
        const user = await User.findOne({ emial }).select("+password");

        if(!user) {
            res.status(404).json({success: false, error: 'Invalid credentials'});
        }

        const isMatch = await user.matchPassowrds(password);

        if(!isMatch) {
            res.status(404).json({success: false, error: 'Invalid credentials'});
        }

        res.status(200).json({success: true, token: 'sssa'})
    } catch (error) {
        res.status(500).json({succes: false, error});
    }
}

exports.forgotPassword = (req, res, next) => {
    res.send('forgot password route');
}

exports.resetPassword = (req, res, next) => {
    res.send('reset password route');
}