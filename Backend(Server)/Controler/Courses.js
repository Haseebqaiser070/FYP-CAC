var coursedoc = require('../Models/Course')

module.exports.Add =async (req, res,next)=> {
    try{
        const course = await coursedoc.create(req.body)
        console.log('course added',course)
        await res.json(course);    
   }
    catch(err){
        console.log(err)
    }
}
module.exports.Showall =async (req, res,next)=> {
    try{
        const course =await coursedoc.find({})
        console.log("all courses",course)
        await res.json(course);
    }catch(err){
        console.log(err)
    }

}