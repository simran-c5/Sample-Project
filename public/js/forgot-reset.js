let flag = 0 

const forgotReqEmailcheck = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.FORGOTPASS,data);
    console.log(variable);
    if(variable.status == "success")
    {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#DetailPopUp").hide();
    }
}

const resetPassReq = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.RESETPASS,data);
    console.log(variable);
    if(variable.status == "success")
    {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#DetailPopUp").hide();
    }
}



const getForgotDetails = ()=>{
    const data = {}
    data.username = $("#username").val();
    let errobj = {};
    if (!isEmailValid(data.username)) {
        errobj.username = "please enter valid name"
        $("#err10").text(errobj.username).show();
    }   
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {

            forgotReqEmailcheck(data);
    }
    

}
const submitResetForm = ()=>{
    const data = {}
    data.password = $("#newpassword").val();
    data.confirmpass =  $("#connewpassword").val();
    let errobj = {};
    if (!isPasswordValid(data.password)) {
        errobj.password = "please enter valid password"
        $("#err11").text(errobj.password).show();
    }
    if (!isPasswordMatch(data.password, data.confirmpass)) {
        errobj.confirmpass = "password does not match"
        $("#err12").text(errobj.confirmpass).show();
    }
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {

            resetPassReq(data);
    }
    

}

const clicks = ()=>{
    $("#submitforgotForm").click(()=>{
        getForgotDetails();
    });
    $("#submitResetForm").click(()=>{
        getResetdetails();
    });
    $("#fname").on("click change input",() => {
        $("#err7").hide()
    });
    $("#lname").on("click change input",() => {
        $("#err8").hide()
    });
    $("#pnumber").on("click change input",() => {
        $("#err9").hide()
    });
    $("#address").on("click change input",() => {
        $("#err10").hide()
    });

}

$(document).ready(()=>{
clicks();
});