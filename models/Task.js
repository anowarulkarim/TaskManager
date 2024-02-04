const mongoose=require('mongoose');


const TaskSchema=mongoose.Schema({
    name:{
        type:String,
        required:['true',"must give the name"],
        trim:true,
        maxlength:[20,"name must be in 10 charecters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('Task',TaskSchema)