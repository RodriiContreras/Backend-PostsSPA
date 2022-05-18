const {Router} = require('express');
const {getUserByID,createUser,getUsers,userLogin} = require('../controller/auth')
const {validation} = require('../middlewares/validateCamps')
const {check} = require('express-validator')
const uploadFile = require('../middlewares/multer');




const router = Router();

router.get('/get-users',[
],getUsers)

router.get('/get-userById/:id',[],getUserByID)

router.post('/post-createUser',[
],createUser)





router.post('/post-userLogin',[],userLogin)

module.exports  = router;