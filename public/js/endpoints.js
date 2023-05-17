const API_SERVER = "http://localhost:5000/"
// const API_SERVER = "https://contact-cards.herokuapp.com/"


const REQUEST_TYPE = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
    OPTION: "OPTION"
}

const API_LIST = {

    SIGNUPPAGE : `${API_SERVER}signup/`,
    LOGINPAGE : `${API_SERVER}login/`,
    SIGNUPSUBMIT :  `${API_SERVER}signup/`,
    LOGINSUBMIT :  `${API_SERVER}loginpost/`,
    SUCCESS :  `${API_SERVER}success/`,
    USERDETAILS :  `${API_SERVER}submitdetail/`,
    USERDETAILSPAGE :  `${API_SERVER}userdetail/`,
    GETUSERDETAILS :  `${API_SERVER}getuserdetails/`,
    GETHOMEPAGE :  `${API_SERVER}`,
    DELETEDATA : `${API_SERVER}deleteDetail/`,
    EDITDATA : `${API_SERVER}editDetails/`,
    GETREGISTERUSERS :  `${API_SERVER}userRegister/`,
    DELETEREGISTERUSER :  `${API_SERVER}deleteUser/`,
    EDITREGISTERUSER :  `${API_SERVER}editData/`,
    FORGOTPASS :  `${API_SERVER}forgotreq/`,
    RESETPASS :  `${API_SERVER}resetpass/`,

    CHECKAUTH :  `${API_SERVER}checkauth/`



}