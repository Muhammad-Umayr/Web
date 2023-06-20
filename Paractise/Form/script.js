var fname = document.getElementById("fname").value;
var mname = document.getElementById("mname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var mobileNumber = document.getElementById("phoneNumber").value;
var sbtn = document.getElementById("sbtn");

// regex ... 
const passwordHaveNum = /^(?=.*\d).+$/;
const passwordHaveSpecialCharacter = /^(?=.*[!@#$%^&*()-=_+[\]{}`~|;:'",.<>/?]).+$/;
const phoneNumHaveHyphen = /^\d{3}-?\d+$/;
const phoneNumFirstDigitIsZero = /^0\d{2}-?\d+$/;
const mobileNumHaveHyphen = /^\d{4}-?\d+$/;
const mobileNumfirstDigitIsZero = /^0\d{3}-?\d+$/;

sbtn.addEventListner(click , formHandler);

function formHandler(e) {
    e.preventDefault();
    if (fname.trim() == " "){
        alert("Enter fname");
        return;
    }
    
    else if (mname.trim() == " "){
        alert("Enter mname");
        return;
    }
    
    else if (lname.trim() == " "){
        alert("Enter lname");
        return;
    }
    
    else if (phoneNumFirstDigitIsZero.test(phoneNumber) !== true) {
        alert ("Enter valid phone number");
    }

    else if (phoneNumHaveHyphen.test(phoneNumber) !== true) {
        alert("Enter '-' after 3 digits in Phone Number");
    }

    else if (mobileNumfirstDigitIsZero.test(mobileNumber) !== true) {
        alert ("Enter valid mobile number");
    }

    else if (mobileNumHaveHyphen.test(mobileNumber) !== true) {
        alert("Enter '-' after 4 digits in mobile Number");
    }

    else if (password.length < 8) {
        alert("please choose 8 character long password");
    }

    else if (password != confirmPassword) {
        alert("Password not matched or incorrect password");
    }

    else if(passwordHaveNum.test( password ) !== true) {
    alert("password must have numbers");
    }

    else if (passwordHaveSpecialCharacter.test(password) !== true) {
        alert("password must have special characters e.g. @ , $ , % , # ");
    }

    else {
        alert("Please fill desired or accurate info ... ");
    }

    let data = {
        Name : `${fname} ${mname} ${lname}`,
        Email : email ,
        Phone : phoneNumber ,
        Mobile : mobileNumber ,
        Password : password ,
        ConfirmPassword : confirmPassword
    }

    localStorage.setItem('Info', JSON.stringify(data));
   sbtn = document.write('<a href= "pageTow.html"></a>');

}

