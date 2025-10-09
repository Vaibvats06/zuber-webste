import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


export async function userLogin(req, res) {
    const {email, password } = req.body;
    const useremail = email.toLowerCase();
    const isUserPresent = await User.findOne({ email: useremail });
    if (!isUserPresent) {
        return res.status(400).json({ message: 'Invalid email ' });
    }
    const isPasswordValid = await bcrypt.compare(password, isUserPresent.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid  password' });
    }
    const token =jwt.sign({
        _id:isUserPresent._id,
    },process.env.JWT_SECRET,{expiresIn:"7d"});
    res.cookie("token",token)
    res.status(200).json({ message: 'Login successful' });
}

export async function userRegister(req, res) {
    try {
    const {name, email, password } = req.body;
    console.log(name,email,password);
    const hashedPassword = await bcrypt.hash(password,10)// In a real application, hash the password before storing it.

    
    
        const newUser= await User.create({
            name: name,
            email: email.toLowerCase(),
            password: hashedPassword
        });
        const token =jwt.sign({
        _id:newUser._id,
    },process.env.JWT_SECRET,{expiresIn:"7d"});
    res.cookie("token",token)
    res.status(201).json({ message: 'User registered successfully'});
    } 
    
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

export async function forgotPassword(req, res) {
    
}