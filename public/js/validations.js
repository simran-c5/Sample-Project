const isNameValid=(name)=>{
    return /^[A-Za-z ]+$/.test(name);
 }

 const isPhoneNumberValid=(phoneNumber)=>{
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(String(phoneNumber).toLowerCase());
 }
 
 function isEmailValid(email) {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }
 function isPasswordMatch(pass,conpass) {
     return (pass===conpass);
 }
 function isPasswordValid(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(String(password).toLowerCase());
}


function isDescriptionValid(description) {
    const re = /^(.|\s)*[a-zA-Z]+(.|\s)*$/;
    return re.test(String(description).toLowerCase());
}

const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

