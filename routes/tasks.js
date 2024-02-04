const express=require('express');
const router=express.Router();
const { getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask}=require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).patch(updateTask).get(getTask)

module.exports=router