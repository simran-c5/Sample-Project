let userContacts = [];

const showdetails = (data) => {
  let html = ``
  data.forEach((d) => {
    html = `${html} <div class="col-md-4 col-12 col-sm-6 cardStyling">
   <div class="card" style="height:21rem;" id="${d._id}">
     <div class="card-body">
     <p>name:${d.fname}</p>
       <p>lastname:${d.lname}</p>
       <p>phone:${d.phonenumber} </p>
       <p>address:${d.address}</p> 
       
     </div>
     <div class="deleteBtnClass">
       <i class="far fa-trash-alt fa-3x "></i>
     </div>
     <div class="editBtnClass">
       <i class="fas fa-edit fa-3x"></i>  
     </div>
   </div>
 </div>
`
  })
  $("#divParentDetail").html(html);
  btnclicks();

}
/* <p>rishabh jain chutiya h</p>
  <p> your id is:${data.username}</p>
  <p> user fname:${data.fname}</p>
  <p> user lname:${data.lname}</p>
  <p> user phonenumber:${data.phonenumber}</p>
   <p> user address:${data.address}</p> */



const getdetails = async () => {
  const result = await ajax(REQUEST_TYPE.GET, API_LIST.GETUSERDETAILS, {})
  console.log(result);
  if (result.data) {
    userContacts = result.data;
    showdetails(result.data);
  }
  else {
    console.log("no details found");
  }
}