const {Schema,model} = require('mongoose')

const UserSchema = Schema({
   img:{
       type:String,
   },
   nickname:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User',
       unique:true
   },
   posts:{
    type:Schema.Types.ObjectId,
    ref:'Post'
   },
   date:{
       type:Date,
       default:Date.now()
   }
})

module.exports = model('Post',UserSchema)