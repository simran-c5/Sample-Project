

const detailsAPI = async(data)=>{
    const variable = await ajax( REQUEST_TYPE.POST,API_LIST.USERDETAILS,data);
    console.log(variable);
    if(variable.status == "success")
    {
        window.location.href=API_LIST.USERDETAILSPAGE
    }
}


const submitdetails = ()=>{
    const data = {}
    data.fname = $("#fname").val();
    data.lname = $("#lname").val();
    data.phonenumber = $("#pnumber").val();
    data.address = $("#address").val();
    detailsAPI(data);

}

const clicks = ()=>{
    $("#successbtnid").click(()=>{
        submitdetails();
    });
}

$(document).ready(()=>{
clicks();
});