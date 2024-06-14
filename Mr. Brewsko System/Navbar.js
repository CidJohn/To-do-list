

function showPage(id){
	var allSec = document.getElementsByClassName("entry");
	for(let i = 0 ; i < allSec.length ; i ++){
		allSec[i].style.display = "none";
	}
	document.getElementById(id).style.display = "block";
}



document.getElementById('Home').onclick = () => {
	showPage("FirstEntry");
}


document.getElementById('Ordering').onclick = () => {
	showPage("SecondEntry");
}