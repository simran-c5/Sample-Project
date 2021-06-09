const API_SERVER = "http://localhost:3000/"

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
    SIGNUPSUBMIT :  `${API_SERVER}submit/`,
    LOGINSUBMIT :  `${API_SERVER}submitchk/`,
    SUCCESS :  `${API_SERVER}success/`,
    USERDETAILS :  `${API_SERVER}submitdetail/`,
    USERDETAILSPAGE :  `${API_SERVER}userdetail/`,
    GETUSERDETAILS :  `${API_SERVER}getuserdetails/`,
    GETHOMEPAGE :  `${API_SERVER}`,
    DELETEDATA : `${API_SERVER}deleteDetail/`,
    EDITDATA : `${API_SERVER}editDetails/`,
    GETREGISTERUSERS :  `${API_SERVER}userRegister/`,
    DELETEREGISTERUSER :  `${API_SERVER}deleteUser/`,
    EDITREGISTERUSER :  `${API_SERVER}editData/`



}