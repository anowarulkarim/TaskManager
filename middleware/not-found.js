const notFound=(req,res)=>{
    res.status(404).send('this rout is not available')
}
module.exports=notFound;