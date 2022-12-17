import memory from "../models/memory.js"
import mongoose from "mongoose"

export const createMemories = async (req,res) => {
    try {
        const newMemory = await memory.create(req.body)
        res.status(200).json(newMemory)
    } catch (error) {
        res.status(400).json({message:"something went wrong"})
    }
}

export const getAllMemories = async (req,res) => {
    try {
        const allMemories = await memory.find()
        res.status(200).json(allMemories)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const updateMemory = async (req,res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:`no memory with id:${id}`})
        const newMemory = await memory.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(newMemory)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
 export const deleteMemory = async (req,res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:`no memory with id:${id}`})
        await memory.findByIdAndDelete(id)
        res.status(204).json({message:'successfully deleted'})
    } catch (error) {
        res.status(500).json(error.message)
    }
 }