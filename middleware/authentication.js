const jwt = require('jsonwebtoken');
const user = require('../model/userSchema')
const secretkey = "awokawok"



const auth = (req,res,next)=>{
    const token = req.body.cookie
    if (token == null) {
        res.status(300).json({"status":"failed","error":"authentecation failed"})
    }
    jwt.verify(token, secretkey, function(err, decoded) {
        if (err) {
            res.status(300).json({"status":"failed","error":err.message})

          console.log(err)
        }
        console.log(decoded);
        req.params.id = decoded.id
        next();
      });
}
module.exports = auth 