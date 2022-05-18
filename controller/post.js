const { response } = require("express")
const Post = require("../models/post")


const createPost = async(req,res=response)=>{
    const {description,img,userImage,nickname} = req.body
     const data = {description,img,userImage,nickname}
      
     const post = await new Post(data)

     post.save()


     res.send({
         msg:'Success',
         data:data
     })
}



module.exports={
    createPost
}