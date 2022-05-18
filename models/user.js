const {Schema,model} = require('mongoose')

const UserSchema = Schema({
   nickname:{
       type:String,
       required:true,
       unique:true
   },
   description:{
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
   image:{
    type:Schema.Types.ObjectId,
    required:true,
   },
   cellphone:{
       type:Number,
       required:true,
       unique:true
   }
})

// UserSchema.methods.setImgUser = function setImgUser(file){

//    this.image= `${file}`
//    console.log(file)
// }
module.exports = model('User',UserSchema)