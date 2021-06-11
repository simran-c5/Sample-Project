

const signupAPI = async (data) => {
    const variable = await ajax(REQUEST_TYPE.POST, API_LIST.SIGNUPSUBMIT, data);
    if (variable.status == "success") {
        window.localStorage.setItem("TOKEN", variable.token);
        window.localStorage.setItem('USER', variable.data.username);
        checkAuthVerifyToken();
        getdetails();
        SignUpHidePopUp();
    }
    console.log(variable);
}
const submitdata = () => {
    let data = {};
    data.gmail = $('#gmail').val();
    data.password = $('#password').val();
    data.confirmpassword = $('#conpassword').val();
    console.log(data);
    signupAPI(data);
}

const submitbtnclick = () => {
    $("#submitbtn").click(() => {
        console.log("hiii");
        submitdata();
    });
}
const SignUpHidePopUp =()=>{
    $("#backgrounddiv").css("-webkit-filter", "blur(0)");
    $("#SignUpPopUp").hide();
  
  }


$(document).ready(() => {
    submitbtnclick();
});