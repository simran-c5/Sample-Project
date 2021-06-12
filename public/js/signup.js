

const signupAPI = async (data) => {
    const variable = await ajax(REQUEST_TYPE.POST, API_LIST.SIGNUPSUBMIT, data);
    if (variable.status == "success") {
        window.localStorage.setItem("TOKEN", variable.token);
        window.localStorage.setItem('USER', variable.data.username);
        checkAuthVerifyToken();
        getdetails();
        SignUpHidePopUp();
        customToastSuccess(variable.status,variable.message);
    }
    else
    {
        customToastError(variable.status,variable.message);
    }
    console.log(variable);
}
const submitdata = () => {
    let data = {};
    data.gmail = $('#gmail').val();
    data.password = $('#password').val();
    data.confirmpassword = $('#conpassword').val();
    let errobj = {};
    if (!isEmailValid(data.gmail)) {
        errobj.gmail = "please enter valid email"
        $("#err4").text(errobj.gmail).show();
    }
    if (!isPasswordValid(data.password)) {
        errobj.password = "please enter valid password"
        $("#err5").text(errobj.password).show();
    }
    if (!isPasswordMatch(data.password, data.confirmpassword)) {
        errobj.confirmpassword = "password does not match"
        $("#err6").text(errobj.confirmpassword).show();
    }
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {
        console.log(data);
        signupAPI(data);
    }

    
}

const submitbtnclick = () => {
    $("#submitbtn").click(() => {
        console.log("hiii");
        submitdata();
    });
    $("#gmail").on("click change input",() => {
        $("#err4").hide()
    });
    $("#password").on("click change input",() => {
        $("#err5").hide()
    });
    $("#conpassword").on("click change input",() => {
        $("#err6").hide()
    });
}
const SignUpHidePopUp = () => {
    $("#backgrounddiv").css("-webkit-filter", "blur(0)");
    $("#SignUpPopUp").hide();

}


$(document).ready(() => {
    submitbtnclick();
});