const {Schema,model} = require('mongoose')

const PostSchema = Schema({
   img:{
    type:String,
    required:true
   },
   userImage:{
   type:Schema.Types.String,
   ref:'User',
   required:true
   },
   nickname:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User',
       unique:true
   },
   description:{
     type:String
   },
   date:{
       type:Date,
       default:Date.now()
   }
})

module.exports = model('Post',PostSchema)