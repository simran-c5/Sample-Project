
var jwt = require('jsonwebtoken');
const User = require('../models/user-Schema');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers['authorization'];
        console.log(token, "is it working");
        if(token && token!="null"){
        console.log("token verification");    
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
    else{
        res.json({
            status:"failure",
            message:"Token is not valid"
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