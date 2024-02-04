const express=require('express');
const Task=require('../models/Task')
const getAllTasks=async (req,res)=>{
    try{
        const tasks=await Task.find({});
        res.status(200).json({tasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const createTask=async (req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateTask= async (req,res)=>{

    try{
        const {id:taskID}=req.params;
        const task= await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`cant find any item of this ${taskID}`});
        }
        res.status(201).json({msg:"updated successfully",task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask=async (req,res)=>{
    try{
        const {id:taskID}=req.params;
        const task= await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`cant find any item of this ${taskID}`});
        }
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const getTask=async (req,res)=>{
    
    try{
        const task=await Task.findOne({_id:req.params.id});
        if(!task){
            return res.status(404).json({msg:`cant find any item of this ${req.params.id}`});
        }
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({error : error})
    }
}
module.exports={
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}