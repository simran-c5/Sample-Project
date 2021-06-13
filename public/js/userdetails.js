let userContacts = [];

const showdetails = (data) => {
  let html = ``
  data.forEach((d) => {
    html = `${html} <div class="col-md-4 col-12 col-sm-6 cardStyling" id="${d._id}">
    <div class="card styleCard" style="height:21rem;">
      <div class="card-body">
        <div class="dropdown" style=" float: right; margin-top: -12px;
      margin-right: 5px;">
          <i data-toggle="dropdown" class=" fas fa-ellipsis-v"></i>
          <div class="dropdown-menu" id="${d._id}">
            <div class="deleteBtnClass">
              <a class="dropdown-item "> <i class="far fa-trash-alt fa-lg "> delete</i>
              </a>
            </div>
            <div class="editBtnClass">
              <a class="dropdown-item"> <i class="fas fa-edit fa-lg"> edit</i>
              </a>
            </div>
          </div>
        </div>
        <div class="container mt-3">
          <div class="profileImage "
            style="width: 100px; height: 100px; border-radius: 50%; margin: 0 auto; background-color: red;">
            <img style="width: 100px; height: 100px; border-radius: 50%;"
              src="https://thumbs.dreamstime.com/b/male-icon-vector-user-person-profile-avatar-flat-color-glyph-pictogram-illustration-117610350.jpg"
              alt="">
          </div>
        </div>
        <div class="container mt-3" style="text-align: center;">
          <p style="font-size: 1.7rem;
      font-weight: bold;
      font-family: sans-serif; margin-bottom: 0;">${d.fname} ${d.lname}</p>
        </div>
        <div class="container" style="text-align: center;">
          <p style="font-size: 1.3rem;
      font-weight: bold;
      font-family: fangsong;
      color: #babcbb;">${d.address}</p>
        </div>
        <div class="container" style="text-align: center;
      padding: 8% 0%;
      display: flex;
      justify-content: space-evenly;">
      <a href="https://wa.me/${d.whatsappnumber}" style="color:black;">         
      <i class="fab fa-whatsapp  fa-2x"></i>
      </a>
      <a href="tel:${d.phonenumber}" style="color:black;">         
          <i class="fas fa-phone-square  fa-2x"></i>
          </a>
          <a href="mailto:${d.username}" style="color:black;">         
          <i class="far fa-envelope  fa-2x"></i>
          </a>
        </div>
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