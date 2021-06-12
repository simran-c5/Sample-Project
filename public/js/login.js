



const  loginAPI = async(data)=>{
    const variable = await ajax(REQUEST_TYPE.POST,API_LIST.LOGINSUBMIT,data);
    if(variable.status == "successful")
    {
        console.log(variable);

        window.localStorage.setItem("TOKEN", variable.token);
        window.localStorage.setItem('USER', variable.user.username); 
        getdetails();
        hidePopUp();
        checkAuthVerifyToken(); 
        customToastSuccess(variable.status,variable.message);
 
    }
    else
    {
        customToastError(variable.status,variable.message);

    }
    console.log(variable);
}
const loginsubmitdata = ()=>{
    let data ={};
    data.gmail = $('#loginGmail').val();
    data.password = $('#loginPassword').val();
    let errobj = {};
    if (!isEmailValid(data.gmail)) {
        errobj.gmail = "please enter valid email"
        $("#err2").text(errobj.gmail).show();
    }
    if (!isPasswordValid(data.password)) {
        errobj.password = "please enter valid password"
        $("#err3").text(errobj.password).show();
    }
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {
        console.log(data);
        loginAPI(data);
    }
    
}
 
const loginsubmitbtnclick = ()=>{
    $("#loginBtnId").click(()=>{
        console.log("hiii");
        loginsubmitdata();
    });
    $("#loginGmail").on("click change input",() => {
        $("#err2").hide()
    });
    $("#loginPassword").on("click change input",() => {
        $("#err3").hide()
    });
   
}

const hidePopUp =()=>{
    $("#backgrounddiv").css("-webkit-filter", "blur(0)");
    $("#loginPopUp").hide();
  
  }

$(document).ready(()=>{
    loginsubmitbtnclick();
});