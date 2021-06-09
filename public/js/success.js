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

const clicks = ()=>{
    $("#successbtnid").click(()=>{
        submitdetails();
    });
}

$(document).ready(()=>{
clicks();
});