
const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const { json } = require("express");

let datadoc = "";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpas: {
        type: String,
        require: true
    }

});
const User = mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost:27017/urapp', { useNewUrlParser: true, useUnifiedTopology: true });
const detailSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    phonenumber: {
        type: Number
    },
    address: {
        type: String
    }


});
const Detail = mongoose.model('Detail', detailSchema);


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
app.get("/userdetail", function (req, res) {
    res.render('userdetail');
});
app.delete('/deleteDetail',function(req,res){
    console.log(req.body);
    Detail.deleteOne({_id : req.body.id}, (err,docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({
                status : "success",
                data : docs
            });
        }
    });
});
app.get("/getuserdetails", function (req, res) {
    Detail.find({ username: datadoc }, function (err, docs){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({
                status : "success",
                data : docs
            });
        }

    });
});

app.post("/editDetails", async (req, res)=>{
    const data = req.body;
    Detail.findOneAndUpdate({_id: data.id},{fname: data.fname, lname: data.lname, phonenumber: data.phonenumber, address: data.address}, (err, docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({
                status : "success",
                data : docs
            });
        }
    });


});

app.post("/submit", async (req, res) => {

    const data = req.body;
    const user = new User({
        username: data.gmail,
        password: await generateHash(data.password),
        confirmpas: await generateHash(data.confirmpassword)

    });
    console.log(user);
    user.save((err, result)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
            datadoc = result.username;
            console.log(datadoc);

            res.json({
                status : "success",
                data : result
            });
        }
    });
    
  });
app.post("/submitdetail", function (req, res) {
    const userdetail = req.body;
    const detail = new Detail({
        username: datadoc,
        fname: userdetail.fname,
        lname: userdetail.lname,
        phonenumber: userdetail.phonenumber,
        address: userdetail.address
    });
    detail.save((err, result)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
            res.json({
                status : "success",
                data : result
            });
        }
    
});
});
app.post("/submitchk", async (req, res)=> {
    const info = req.body;
    console.log(info);
    // info.password = await generateHash(info.password);

  User.findOne({ username: info.gmail }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Result : ", docs);
            datadoc = docs.username;
            console.log(datadoc);
            console.log(info.password);
            console.log(docs.password);
  
            if(bcrypt.compareSync(info.password, docs.password)) {
           res.json({
               status: "successful"
           });

            }
            else {
                res.json({
                    status: "fail"
                });           
             }
         }
    });
    console.log(datadoc);
});
const generateHash = async(password)=>{
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
}

app.get("/admin", (req, res)=>{
    res.render("admin");
});

app.get("/userRegister", (req, res)=>{
    User.find({ }, function (err, docs){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({
                status : "success",
                data : docs
            });
        }

    });
});

app.delete("/deleteUser", (req, res)=>{
    console.log(req.body);
    User.deleteOne({username : req.body.username}, (err,docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({
                status : "success",
                data : docs
            });
        }
    });
});


app.post("/editData", async(req, res)=>{
    const data = req.body;
    data.password = await generateHash(data.password);
    data.confirmpassword = await generateHash(data.confirmpassword)
    User.findOneAndUpdate({username: data.username},{password:  data.password, confirmpas: data.confirmpassword }, (err, docs)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({
                status : "success",
                data : docs
            });
        }
    });
});


app.listen(3000, function () {
    console.log('server is running at 3000')
});