const {Schema,model} = require('mongoose')

const UserSchema = Schema({
   nickname:{
       type:String,
       required:true,
       unique:true
   },
   state:{
    type:String,
   },
   password:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   posts:{
    type:Schema.Types.ObjectId,
    ref:'Post'
   },
   cellphone:{
       type:Number,
       required:true,
       unique:true
   }
})

module.exports = model('User',UserSchema)