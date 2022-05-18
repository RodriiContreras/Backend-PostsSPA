const {Schema,model} = require('mongoose')

const ImageSchema = Schema({
  filename:{
      type:String
  },
  path:{
      type:String
  },
  originalname:{
      type:String
  },
  mimetype:{
      type:String
  },
  size:{
      type:Number
  },
  created_at:{
      type:Date,
      default:Date.now()
  }
})

module.exports = model('Image',ImageSchema)