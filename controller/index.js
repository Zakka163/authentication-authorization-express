const md5 = require('md5')
const jwt = require('jsonwebtoken');
const user = require('../model/userSchema')
const secretkey = "awokawok"

const handlerRegister = async (req,res)=>{
    try {
        const [name,password] = [req.body.name,req.body.password]
        const data = await user.findAll({
        where: {
            name: name
          }
    })
        if(data.length > 0 ){
            res.json({"status":"failed","error":"name is ready"})
        }else{
            await user.create({ name: name ,password:md5(password)})
            res.json({"status":"succes"})
        }
    } catch (error) {
        res.json({"status":"failed","error":error})
        console.log(error);
    }

}

const handlerLogin = async (req,res)=>{
try {
    const [name,password] = [req.body.name,req.body.password]
    //console.log(name);
    const data = await user.findAll({
    where: {
        name: name
      }
    })
    //console.log(data.password);
    if (data.length == 0) {
        res.json({"status":"failed","error":"name not existing"})
    }
    
     
    if (data[0].password !== md5(password)) {
        res.json({"status":"failed","error":"password wrong"})
    }else{
        const token = await jwt.sign({ name: name ,id:data[0].id}, secretkey, { expiresIn: '60000' });
        res.json({"status":"succes","token":token})
    }
} catch (error) {
    res.json({"status":"failed","error": error })
    console.log(error);
}
}


module.exports = { handlerRegister,handlerLogin}