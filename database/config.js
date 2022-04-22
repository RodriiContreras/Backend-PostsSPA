const mongoose = require('mongoose')


const dbConnection = async () =>{
    try {
         await mongoose.connect(process.env.MONGODB,{
             useNewUrlParser:true,
             useUnifiedTopology:true,
         })
     console.log('Db Conectada')
        }

    catch (error) {
        console.log(error)
    }
}


module.exports={
    dbConnection
}