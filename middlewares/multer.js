const { response } = require('express');
const multer = require('multer');


function uploadFile(req,res =response,next){
    const storage = multer.diskStorage({
        destination: './public/uploads' ,
        filename: function(_req, file, cb){
            let ext = file.originalname.slice(file.originalname.lastIndexOf('.'));
            cb(null, Date.now() + ext)
        }
    })
    const upload = multer({ storage : storage }).single('file');
     

    return upload
}


module.exports = uploadFile