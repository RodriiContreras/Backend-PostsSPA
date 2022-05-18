const {Router} = require('express');
const {createPost} = require('../controller/post')


const router = Router();

router.post('/create-posts',createPost)




module.exports  = router;