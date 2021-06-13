let flag = 0 

const addDetailsAPI = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.USERDETAILS,data);
    console.log(variable);
    if(variable.status == "success")
    {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#DetailPopUp").hide();
        getdetails();

    }
}
const editDetailsAPI = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.EDITDATA,data);
    console.log(variable);
    if(variable.status == "success")
    {
        $("#backgrounddiv").css("-webkit-filter", "blur(0)");
        $("#DetailPopUp").hide();
        getdetails();

    }
}


const submitdetails = ()=>{
    const data = {}
    data.fname = $("#fname").val();
    data.lname = $("#lname").val();
    data.phonenumber = $("#pnumber").val();
    data.address = $("#address").val();
    data.whatsappnumber = $("#whatsappnumber").val();
    let errobj = {};
    if (!isNameValid(data.fname)) {
        errobj.fname = "please enter valid name"
        $("#err7").text(errobj.fname).show();
        
    }
    if (!isNameValid(data.lname)) {
        errobj.lname = "please enter valid name"
        $("#err8").text(errobj.lname).show();
        
    }
    if(!isPhoneNumberValid(data.phonenumber))
    {
        errobj.phonenumber = "please enter valid number"
        $("#err9").text(errobj.phonenumber).show();
    }
    if(!isPhoneNumberValid(data.whatsappnumber))
    {
        errobj.whatsappnumber = "please enter valid number"
        $("#err9").text(errobj.whatsappnumber).show();
    }
    if(data.address=="")
    {
        errobj.address = "can not be empty"
        $("#err10").text(errobj.address).show();
    }
   
    if (!isEmpty(errobj)) {
        console.log(errobj);
    }
    else {
        if(flag == 0)
        {
            console.log("notedit");
            addDetailsAPI(data);
        }
        else
        {
            console.log("edit");
            data.id = editContactId
            editDetailsAPI(data);
        }
    }
    

}

const clicks = ()=>{
    $("#successbtnid").click(()=>{
        submitdetails();
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