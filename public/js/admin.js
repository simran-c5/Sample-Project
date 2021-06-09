let adminUsername

 const userRegisterGetAPI = async()=>{
     let variable = await ajax(REQUEST_TYPE.GET,API_LIST.GETREGISTERUSERS,{});
     console.log(variable);
     if(variable.data)
     {
      showRegisterUsers(variable.data);
     
    }
    else
    {
      console.log(" no user found");
    }
 }

const showRegisterUsers = (data)=>{
    let html = ``
    data.forEach((d) => {
      html = `${html} <div class="col-md-4 col-12 col-sm-6 cardStyling">
     <div class="card" style="height:21rem;" id="${d.username}" >
       <div class="card-body">
       <p>username:${d.username}</p>
         <p>password:${d.password}</p>
         <p>confirmpassword:${d.confirmpas} </p>
       </div>
       <div class="adminDeleteBtn">
         <i class="far fa-trash-alt fa-3x "></i>
       </div>
       <div class="adminEditBtnClass">
         <i class="fas fa-edit fa-3x"></i>  
       </div>
     </div>
   </div>
  `
    })
    $("#divParentGetUser").html(html);
    onclicks();
}


const  userRegisterDeleteAPI = async(data)=>{
    const result = await ajax(REQUEST_TYPE.DELETE,API_LIST.DELETEREGISTERUSER,data);
    if(result)
    {
        console.log(result);
        userRegisterGetAPI();
    }
    
}


const  userRegisterEditAPI = async(data)=>{
  const result = await ajax(REQUEST_TYPE.POST,API_LIST.EDITREGISTERUSER,data)
  if (result.status == "success") {
    userRegisterGetAPI();
    adminHidePopUp();
   
}
console.log(result);

}
const onclicks = ()=>{
    $(".adminDeleteBtn").unbind("click")
    $(".adminDeleteBtn").click(function(){
       let data = {
            username: $(this).parent().attr("id")
        }
        console.log(data);
      userRegisterDeleteAPI(data);
    });

    $(".adminEditBtnClass").unbind("click")
    $(".adminEditBtnClass").click(function(){
      $("#adminBackgrounddiv").css("-webkit-filter", "blur(10px)");
      $("#adminPopUpId").show();
      let data = {
            username: $(this).parent().attr("id")
        }
        adminUsername = data.username;
        console.log(data);
    });
   
    $("#adminCloseBtnId").click(function(){
      $("#adminBackgrounddiv").css("-webkit-filter", "blur(0)");
      $("#adminPopUpId").hide();
   });

   $("#adminSubmitbtn").click(function(){
    editSubmitdata();
    

 });

}
const editSubmitdata = () => {
  let data = {};
  data.username = adminUsername;
  data.password = $('#adminPassword').val();
  data.confirmpassword = $('#adminConpassword').val();
  console.log(data);
  userRegisterEditAPI(data);
}

const adminHidePopUp =()=>{
  $("#adminBackgrounddiv").css("-webkit-filter", "blur(0)");
  $("#adminPopUpId").hide();
  $('#adminPassword').val("");
  $('#adminConpassword').val("");

}

 $(document).ready(()=>{
    userRegisterGetAPI();
});