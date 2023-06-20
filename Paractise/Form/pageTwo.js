var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var sbtn = document.getElementById("sbtn");

function handle_sbtn (e){
    e.preventDefault();
    localStorage.setItem('Info', JSON.parse(data));
    if (email === data.Email && password === data.Password){
        aler("Wellcome to Home Page");
        document.write(" <a href='./pageThree.html'></a>");
    }
    else {
        alert("incorect username or password");
    }

}

sbtn.addEventListener(click , handle_sbtn);