/*
Creator: Jeffrey Townsend
Date created: 10/18/2019
Date last modified: 10/21/2019
*/
function validateItems() {
    clearErrors();
	var phoneNumber = document.forms["personalInformation"]["phoneNumber"].value;
	   if (phoneNumber == "" || isNaN(phoneNumber)) {
        alert("Phone number must be filled in with a number.");
        document.forms["personalInformation"]["phoneNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["personalInformation"]["phoneNumber"].focus();
		return false;
    }
   }
 
