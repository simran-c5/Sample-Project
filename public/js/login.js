
const  signupAPI = async(data)=>{
    const variable = await ajax(REQUEST_TYPE.POST,API_LIST.LOGINSUBMIT,data);
    if(variable.status == "successful")
    {
        window.location.href=API_LIST.SUCCESS
    }
    console.log(variable);
}
const submitdata = ()=>{
    let data ={};
    data.gmail = $('#loginGmail').val();
    data.password = $('#loginPassword').val();
    console.log(data);
    signupAPI(data);
}
 
const submitbtnclick = ()=>{
    $("#loginBtnId").click(()=>{
        console.log("hiii");
        submitdata();
    });
}


$(document).ready(()=>{
    submitbtnclick();
});