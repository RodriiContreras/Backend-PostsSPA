const { response } = require("express");
const User = require("../models/user");
const bcrypt= require('bcryptjs');



const getUserByID = async (req,res=response)=>{
  const {id} = req.params;

  const usuarioExiste = await User.findById(id)

  if(!usuarioExiste){
    return res.json({msg:'User not found'})
  }

     res.status(201).json({
        data:usuarioExiste
    })
  
}

const userLogin = async (req,res=response)=>{
  const {email,password} = req.body;

  const usuarioExiste = await User.findOne({email:email})
  const verifyPassword = bcrypt.compareSync(password,usuarioExiste.password)
  
  
  if(!verifyPassword){
    return res.json({msg:'Wrong password or Email'})
  }

  if(!usuarioExiste){
    return res.json({msg:'User not found'})
  }


     res.status(201).json({
        data:usuarioExiste
    })
  
}


const getUsers = async (req,res=response)=>{
    const users = await User.find({})

    res.json({
        msg:users
    })

  }

const createUser = async (req,res=response)=>{
   const {email,nickname,cellphone,password,description} = req.body
   const {file} = req.file
   const fileImage = User.findOne({file})

   const pathImage = `${process.env.APP_HOST}:${process.env.PORT}/public/uploads/${req.file.filename}`
      console.log(fileImage)
     const UserByEmail = await User.findOne({email})
     const UserByNickname = await User.findOne({nickname})
     const UserByCellphone = await User.findOne({cellphone})

     if(UserByCellphone){
      return res.json({msg:'This user already exists'})
  }
     if(UserByNickname){
      return res.json({msg:'This user already exists'})
  }
      if(UserByEmail){
          return res.json({msg:'This user already exists'})
      }


  

    
 


     
  
        const dataUser = await new User({image:pathImage,email,nickname,cellphone,password,description}) //hash password
    
         
         
  
        const salt =  bcrypt.genSaltSync();
        dataUser.password= bcrypt.hashSync(password, salt);
      
        

        dataUser.save()
      





   res.status(201).json({
       msg:'Success',
       user:dataUser
   })


}




module.exports={
    getUserByID,
    createUser,
    getUsers,
    userLogin,
}