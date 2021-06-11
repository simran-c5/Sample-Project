
var jwt = require('jsonwebtoken');
const User = require('../models/user-Schema');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers['authorization'];
        console.log(token);
        if(token){
        const decode = jwt.verify(token,'ContactsApplicationJWT-Secret');
        console.log(decode);
        User.findOne({username:decode.user}).then((user)=>{
            if(!user){
                console.log(user);
                res.json({
                    status:"failure",
                    message:"Token is not valid"
                })
            }
            else{
                console.log(decode,"ldfkjdsldflj-frterer");
                req.user = decode;
                next();
            }
        })
     
    }
    }
    catch(error){
        console.log(error);
         return res.json({
            message:"auth failed"
        });
    }
  

}