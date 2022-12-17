import user from "../models/user.js"
import bcrypt from 'bcrypt'

export const login = async (req,res) => {
    const {email,password} =req.body
    console.log(req.body)
  try {
    const existingUser = await user.findOne({email})
    if(!existingUser) return res.status(404).json({message:"user not found with given email"})
    const ispasswordCorrect = await bcrypt.compare(password,existingUser.password,)
    if(!ispasswordCorrect) return res.status(400).json({message:"invalid password"})
    res.status(200).json(existingUser)
  } catch (error) {
    res.status(500).json(error)
  }

}

export const register = async (req,res) => {
    const {firstname,lastname,email,password,gender,height} =req.body
  try {
    const existingUser = await user.findOne({email})
    if(existingUser) return res.status(404).json({message:"user already exists with this email"})
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await user.create({...req.body, password:hashedPassword})

    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({message:error.message})
  }

}