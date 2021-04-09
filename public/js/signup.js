
const  signupAPI = async(data)=>{
    const variable = await ajax(REQUEST_TYPE.POST,API_LIST.SIGNUPSUBMIT,data);
    console.log(variable);
}
const submitdata = ()=>{
    let data ={};
    data.gmail = $('#gmail').val();
    data.password = $('#password').val();
    data.confirmpassword = $('#conpassword').val();
    console.log(data);
    signupAPI(data);
}
 
const submitbtnclick = ()=>{
    $("#submitbtn").click(()=>{
        console.log("hiii");
        submitdata();
    });
}


$(document).ready(()=>{
    submitbtnclick();
});