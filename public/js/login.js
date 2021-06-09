



const  loginAPI = async(data)=>{
    const variable = await ajax(REQUEST_TYPE.POST,API_LIST.LOGINSUBMIT,data);
    if(variable.status == "successful")
    {
        getdetails();
        hidePopUp();
       
    }
    console.log(variable);
}
const loginsubmitdata = ()=>{
    let data ={};
    data.gmail = $('#loginGmail').val();
    data.password = $('#loginPassword').val();
    console.log(data);
    loginAPI (data);
}
 
const loginsubmitbtnclick = ()=>{
    $("#loginBtnId").click(()=>{
        console.log("hiii");
        loginsubmitdata();
    });
}

const hidePopUp =()=>{
    $("#backgrounddiv").css("-webkit-filter", "blur(0)");
    $("#loginPopUp").hide();
  
  }

$(document).ready(()=>{
    loginsubmitbtnclick();
});