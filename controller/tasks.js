const express = require('express');
const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError}=require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks })
})
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})
const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return res.status(404).json({ msg: `cant find any item of this ${taskID}` });
    }
    res.status(201).json({ msg: "updated successfully", task })

})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`cant find any item of this ${req.params.id}`),404)
    }
    res.status(201).json({ task })
})
const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
        return next(createCustomError(`cant find any item of this ${req.params.id}`),404)
    }
    res.status(200).json({ task })
})
module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}