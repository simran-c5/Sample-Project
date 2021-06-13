
const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const checkAuth = require("./middleware/checkauth");

const Detail = require('./models/user-contacts-schema');
const User = require('./models/user-Schema');


mongoose.connect('mongodb+srv://Simranjain:Simranjain123@@cluster0.oxcdw.mongodb.net/ContactsApplication?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

let datadoc = "";




const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/success", function (req, res) {
    res.render('success');

});

app.get("/", function (req, res) {
    res.render('home');

});
app.get("/signup", function (req, res) {

    res.render('signup');
});
app.get("/login", function (req, res) {
    res.render('login');
});
app.get("/about", function (req, res) {
    res.render('aboutUs');
});
app.get("/userdetail",checkAuth, function (req, res) {
    res.render('userdetail');
});
app.delete('/deleteDetail',checkAuth, function (req, res) {
    console.log(req.body);
    Detail.deleteOne({ _id: req.body.id }, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: "success",
                data: docs
            });
        }
    });
});
app.get("/getuserdetails",checkAuth, function (req, res) {
    console.log(req.user,"gsjdfsfdsfjslfjds");
    Detail.find({ username: req.user.user }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: "success",
                data: docs
            });
        }

    });
});

app.post("/editDetails",checkAuth, async (req, res) => {
    const data = req.body;
    Detail.findOneAndUpdate({ _id: data.id }, { fname: data.fname, lname: data.lname, phonenumber: data.phonenumber, address: data.address }, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: "success",
                data: docs
            });
        }
    });


});

app.post("/signup", async (req, res) => {

    const data = req.body;
    User.findOne({ username: data.gmail }).then(async(user) => {
        if (user) {
            res.json({
                status: "failure",
                message:"user already exists"
            });
        }
        else{
            const pass = await bcrypt.hash(data.password,10);
            const user = new User({
                username: data.gmail,
                password: pass,
            });
            console.log(user);
            user.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result)
                    datadoc = result.username;
                    console.log(datadoc);
                    const token = jwt.sign({ user: result.username }, "ContactsApplicationJWT-Secret");        
                    res.json({
                        status: "success",
                        message:"User Signed in successfully",
                        data: result,
                        token:token
                    });
                }
            });

        }
    })
   

});
app.post("/submitdetail",checkAuth, function (req, res) {
    const userdetail = req.body;
    const detail = new Detail({
        username: req.user.user,
        fname: userdetail.fname,
        lname: userdetail.lname,
        phonenumber: userdetail.phonenumber,
        address: userdetail.address,
        whatsappnumber:userdetail.whatsappnumber
    });
    detail.save((err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result)
            res.json({
                status: "success",
                data: result
            });
        }

    });
});
app.post("/loginpost", async (req, res) => {
    const info = req.body;
    console.log(info,"my name is silky jain");
    // info.password = await generateHash(info.password);
    User.findOne({ username: info.gmail }, function (err, docs) {
        if (err) {
            console.log(err);
            res.json({
                status:"failure",
                message:"something went wrong"
            });
        }
        else {
            console.log("Result : ", docs);
            datadoc = docs.username;
            console.log(datadoc);
            console.log(info.password);
            console.log(docs.password);
            if (bcrypt.compareSync(info.password, docs.password)) {
                const token = jwt.sign({ user: info.gmail }, "ContactsApplicationJWT-Secret");
                res.json({
                    status: "successful",
                    message:"User Logged In successfully",
                    user:docs,
                    token:token
                });

            }
            else {
                res.json({
                    status: "failure",
                    message:"Wrong Username or password",

                });
            }
        }
    });
    console.log(datadoc);
});
const generateHash = async (password) => {
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
}

app.get("/admin", (req, res) => {
    res.render("admin");
});
app.get("/aboutUs", (req, res) => {
    res.render("aboutUs");
});

// app.get("/userRegister", (req, res) => {
//     User.find({}, function (err, docs) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.json({
//                 status: "success",
//                 data: docs
//             });
//         }

//     });
// });

app.delete("/deleteUser",checkAuth, (req, res) => {
    console.log(req.body);
    User.deleteOne({ username: req.body.username }, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: "success",
                data: docs
            });
        }
    });
});


app.post("/editData",checkAuth, async (req, res) => {
    const data = req.body;
    data.password = await generateHash(data.password);
    data.confirmpassword = await generateHash(data.confirmpassword)
    User.findOneAndUpdate({ username: data.username }, { password: data.password, confirmpas: data.confirmpassword }, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: "success",
                data: docs
            });
        }
    });
});


app.get("/checkauth",checkAuth,(req,res)=>{
    try{
        console.log("hello");
        const user = req.user.user;
        if(user){
            const obj = {
                "status": "success",
                "message":"authenication verified"
            }
            res.json(obj);
        }
        else{
            const obj = {
                "status": "failure",
                "message":"authenication verification failed"
            }        
            res.json(obj);
        }
       
      
      
    }
    catch(error){
        console.log(error);
        const obj = {
            "status": "failure",
            "message":"authenication verification failed"
        }    
        res.json(obj);
    }
})

app.post("/forgotreq",(req,res)=>{
    const email = req.body.username;
    console.log(req.body);
    try {
        User.findOne({username:email}).then((user)=>{
            if(user){
                res.json({
                    "status": "success",
                    "message":"user found",
                    "userid": user

                })
            }
            else{
                res.json({
                    "status": "failure",
                    "message":"user not found"
                })
            }
        })
    } catch (error) {
        console.log(error);
        res.json({
            "status": "failure",
            "message":"something went wrong"
        })
    }
   
});
app.post("/resetpass",async(req,res)=>{
    let pass = req.body.password;
    let passhash = await bcrypt.hash(pass,10);
    let username = req.body.username;
    try {
        User.findOneAndUpdate({username},{password:passhash}).then((user)=>{
            if(user){
                res.json({
                    "status": "success",
                    "message":"password changed successfully"
                })
            }
            else{
                res.json({
                    "status": "failure",
                    "message":"user not found"
                })
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            "status": "failure",
            "message":"something went wrong"
        })
    }
  

})


app.listen(process.env.PORT||4000, function () {
    console.log('server is running at 3000')
});