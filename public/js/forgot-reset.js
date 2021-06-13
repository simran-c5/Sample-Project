let user

const forgotReqEmailcheck = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.FORGOTPASS,data);
    console.log(variable);
    if(variable.status == "success")
    {
        user=variable.userid
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#forgotPasswordPopUp").hide();
        $("#resetPasswordPopUp").show();
    }
}

const resetPassReq = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.RESETPASS,data);
    console.log(variable);
    if(variable.status == "success")
    {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#resetPasswordPopUp").hide();
        customToastSuccess(variable.status,variable.message);

    }
    else
    {
        customToastError(variable.status,variable.message);

    }
}



const getForgotDetails = ()=>{
    const data = {}
    data.username = $("#username").val();
    let errobj = {};
    if (!isEmailValid(data.username)) {
        errobj.username = "please enter valid emailId"
        $("#errforgot").text(errobj.username).show();
    }   
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {
            forgotReqEmailcheck(data);
    }
    

}
const   getResetdetails = ()=>{
    const data = {}
    data.username = user.username
    data.password = $("#newPassword").val();
    data.confirmpass =  $("#confirmNewPassword").val();
    let errobj = {};
    if (!isPasswordValid(data.password)) {
        errobj.password = "please enter valid password"
        $("#errnew").text(errobj.password).show();
    }
    if (!isPasswordMatch(data.password, data.confirmpass)) {
        errobj.confirmpass = "password does not match"
        $("#errnewcon").text(errobj.confirmpass).show();
    }
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {

            resetPassReq(data);
    }
    

}

const forgotResetClicks = ()=>{
    $("#forgotPassword").click(()=>{
        getForgotDetails();
    });
    $("#resetPassword").click(()=>{
        getResetdetails();
    });
    $("#username").on("click change input",() => {
        $("#errforgot").hide()
    });
    $("#newPassword").on("click change input",() => {
        $("#errnew").hide()
    });
    $("#confirmNewPassword").on("click change input",() => {
        $("#errnewcon").hide()
    });

}

$(document).ready(()=>{
    forgotResetClicks();
});