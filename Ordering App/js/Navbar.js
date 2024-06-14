
function showPage(id){
	var allSec = document.getElementsByClassName("secDisplay");
	for(let i = 0 ; i < allSec.length ; i ++){
		allSec[i].style.display = "none";
	}
	document.getElementById(id).style.display = "block";
}



document.getElementById('Shopfloor').onclick = () => {
	showPage("OrderingSection");
}

document.getElementById('Home').onclick = () => {
	showPage("HomeSection");
}
document.getElementById('AboutUs').onclick = () => {
	showPage("AboutUsSection");
}
document.getElementById('ContactUs').onclick = () => {
	showPage("ContactUsSection");
}

document.getElementById('loginLi').addEventListener('click', function() {
	window.location.href = 'LoginPage/Login.html';
});

document.getElementById('SignupButton').addEventListener('click', () => {
	window.location.href = 'LoginPage/Signup.html';
})

	

// Function to toggle visibility based on login status
function toggleAuthComponents() {

	var userList;
	if(localStorage.getItem("Logintable") == null){
		userList = [];
	}else{
		userList = JSON.parse(localStorage.getItem("Logintable"));
	}
	let logout = "";
	userList.map((value,index) => {
		if (index != null) {
        document.getElementById("loginLi").style.display = "none";
        document.getElementById("SignupButton").style.display = "none";
        document.getElementById("profileLi").style.display = "block";
			logout += `<a class="nav-link" href="#" id="ProfileLink" onclick="Logout(${index})">Logout</a>`;
		 	document.getElementById("profileLi").innerHTML = logout;
    } else {
        document.getElementById("loginLi").style.display = "block";
        document.getElementById("SignupButton").style.display = "block";
        document.getElementById("profileLi").style.display = "none";
    }
	})
    
}

document.onload = toggleAuthComponents();

