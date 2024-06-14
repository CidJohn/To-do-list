
function ContactSend() {
    const fname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subj = document.getElementById("subject").value;
    const mes = document.getElementById("message").value;

    var contactList;
    if(localStorage.getItem("contactTable") == null){
        contactList = [];
    }else{
        contactList = JSON.parse(localStorage.getItem("contactTable"))
    }
    contactList.push({
        fname: fname,
        email: email,
        subject: subj,
        message: mes
    })
    console.log(contactList)
    localStorage.setItem("contactTable", JSON.stringify(contactList));
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        alert("Contact Saved!")

}

function Logout(index) {
    var userList;
    if (localStorage.getItem("Logintable") == null) {
    userList = [];
    }
    else {
    userList = JSON.parse(localStorage.getItem("Logintable"));
    }
    userList.splice(index, 1);
    console.log(userList);
    localStorage.setItem("Logintable", JSON.stringify(userList));
    document.getElementById("loginLi").style.display = "block";
    document.getElementById("SignupButton").style.display = "block";
    document.getElementById("profileLi").style.display = "none";
}

function loginForm() {
    const username = document.getElementById("inputUser").value;
    const pass = document.getElementById("inputPassword").value;

    var userList;
    if(localStorage.getItem("UserTable") == null){
        userList = [];
    }
    else{
        userList = JSON.parse(localStorage.getItem("UserTable"));
    }
    userList.map((value,index) =>{
        if(username == "admin" && pass == "admin" || value.uname == username && value.pass == pass){
            var loginList;
            if(localStorage.getItem("Logintable") == null){
                loginList = [];
            }
            else{
                loginList = JSON.parse(localStorage.getItem("Logintable"));
            }
            loginList.push({
                user: username,
                pass: pass
            })
            
            localStorage.setItem("Logintable", JSON.stringify(loginList));
            window.location.href = "../index.html";
        }else{
            document.getElementById("error").innerHTML = "Wrong Password or Username!";
        }
    }) 
}

function signupForm() {

    const uname = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pwd").value;

    var userList;
    if(localStorage.getItem("UserTable") == null){
        userList = [];
    }else{
        userList = JSON.parse(localStorage.getItem("UserTable"));
    }

    userList.push({
        uname: uname,
        email: email,
        pass: pass
    })
    localStorage.setItem("UserTable", JSON.stringify(userList));
    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pwd").value = "";

    alert("New User Created");
    window.location.href = "Login.html";
}



