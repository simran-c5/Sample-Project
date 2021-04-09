

const showdetails = (data)=>{
    let html = ``
    html = `<p>rishabh jain chutiya h</p>
    <p> your id is:${data.username}</p>
    <p> user fname:${data.fname}</p>
    <p> user lname:${data.lname}</p>
    <p> user phonenumber:${data.phonenumber}</p>
     <p> user address:${data.address}</p>`
     $("#divParentDetail").html(html);

}


const getdetails = async()=>{
     const result = await ajax(REQUEST_TYPE.GET,API_LIST.GETUSERDETAILS,{})
     console.log(result);
      showdetails(result.data);
}


$(document).ready(()=>{
  getdetails();
    });