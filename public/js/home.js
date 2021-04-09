









btnclicks = ()=>{
    $("#signupbtnid").click(()=>{
         window.location.href = API_LIST.SIGNUPPAGE;
        
    });
    $("#loginbtnid").click(()=>{
        window.location.href = API_LIST.LOGINPAGE;

    });
}



$(document).ready(()=>{
    btnclicks();
});

