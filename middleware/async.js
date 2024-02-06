const asyncWrapper=(fun)=>{
    return async(res,req,next)=>{
        try{
            await fun(res,req,next)
        }
        catch(error){
            next(error)
        }
    }
}

module.exports=asyncWrapper;