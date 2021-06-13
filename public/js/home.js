




let editContactId ;
let userVerified = false;

 const  DeleteAPI= async(data)=>{
     const result = await ajax(REQUEST_TYPE.DELETE,API_LIST.DELETEDATA,data);
     if(result)
     {
         console.log(result);
         getdetails();
     }
     

}
const  editDetailsPopUp = (id)=>{
    let result = userContacts.find(obj =>obj._id==id);
    console.log(result);
    $("#fname").val(result.fname);
    $("#lname").val(result.lname);
    $("#pnumber").val(result.phonenumber);
    $("#address").val(result.address);
    $("#DetailPopUp").show();

}

const clrDetailsPopUp = ()=>{
    $("#fname").val("");
    $("#lname").val("");
    $("#pnumber").val("");
    $("#address").val("");

}


btnclicks = () => {
    $("#signupbtnid").click(() => {
        window.location.href = API_LIST.SIGNUPPAGE;

    });
    $("#loginbtnid").click(() => {
        window.location.href = API_LIST.LOGINPAGE;

    });
    $("#closeBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#loginPopUp").hide();

    });
    $("#SignInbtnid").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
        $("#loginPopUp").show();

    });
    $("#SignUpCloseBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#SignUpPopUp").hide();

    });
    $("#forgotPasswordCloseBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#forgotPasswordPopUp").hide();

    });
    $("#resetPasswordCloseBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#resetPasswordPopUp").hide();

    });
    $("#SignUpBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
        $("#loginPopUp").hide();
        $("#SignUpPopUp").show();
    });
    $("#forgotPassword").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
        $("#forgotPasswordPopUp").hide();
        $("#resetPasswordPopUp").show();
    });
    $("#forgotPassword").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
        $("#loginPopUp").hide();
        $("#forgotPasswordPopUp").show();
    });
    $("#SignInBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
        $("#SignUpPopUp").hide();
        $("#loginPopUp").show();
    });

    $("#DetailCloseBtnId").click(() => {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#DetailPopUp").hide();

    });
    $("#addbtnid").click(() => {
        flag = 0;
        clrDetailsPopUp();
        if(userVerified){
            $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
            $("#loginPopUp").hide();
            $("#DetailPopUp").show();
        }
        else{
            $("#backgrounddiv").css("-webkit-filter", "blur(10px)");
            $("#loginPopUp").show();
            $("#DetailPopUp").hide();
        }
       

    });
    $(".deleteBtnClass").unbind("click")
    $(".deleteBtnClass").click(function(){
       let data ={
            id: $(this).parent().attr("id")
        }
        console.log(data);
      DeleteAPI(data);
    });
    $(".editBtnClass").unbind("click")
    $(".editBtnClass").click(function(){
        flag = 1;
       let data ={
            id: $(this).parent().attr("id")
        }
        editContactId = data.id;
        console.log(data);
        editDetailsPopUp(data.id); 
    });
}


const checkAuthVerifyToken= async(token)=>{
    const result = await ajax(REQUEST_TYPE.GET,API_LIST.CHECKAUTH,{});
    if(result && result.status=="success")
    {
        $("#SignInbtnid").hide();
        $("#LogOutbtnid").show();
        console.log(result);
        userVerified = true;
        return true;
    }
    else{
        $("#SignInbtnid").show();
        $("#LogOutbtnid").hide();
        userVerified  = false;
        return false;
    }
    

}

const logout=()=>{
    window.localStorage.clear();
    window.location.href="/";
}

const getUserContacts = ()=>{
    token=window.localStorage.getItem('TOKEN');
    console.log(token,"hulululul");
    if(!token){
    }
    else{
        return veryfyToken(token);
    }
}






$(document).ready(() => {
    checkAuthVerifyToken();
    getdetails();
    btnclicks();
});

