const express = require('express');
const auth  =require('../middleware/authentication')
const {handlerRegister, handlerLogin} = require('../controller')
const router = express.Router([]);



router.post('/register',handlerRegister)
router.post('/login', handlerLogin)
router.get('/home',auth,(req,res)=>{
    res.send(`halo ${req.params.id}`)
})




module.exports = router;