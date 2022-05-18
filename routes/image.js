const {Router} = require('express');
const {} = require('../controller/image');
const uploadFile = require('../middlewares/multer');
const Image = require('../models/image')

const router = Router();


router.get('/get-Images',async (req,res)=>{
    const images = await Image.find({})

    res.json({
        msg:images
    })
})

router.post('/post-createImage',uploadFile(), async(req,res)=>{
    const image = new Image();
    image.path = `/public/uploads/${req.file.filename}`
    image.filename = req.file.filename
    image.originalname = req.file.originalname
    image.mimetype = req.file.mimetype
    image.size = req.file.size

    await image.save()
    console.log(req.file)
    res.json({msg:'peticion hecha'})
})





module.exports  = router;