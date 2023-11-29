function validationForm(){
	var subj = document.getElementById("subject").value;
	var cont = document.getElementById("content").value;

	return true;
}

function AllData(){
	var appList;
	if(localStorage.getItem("details") == null){
		appList = [];
	}
	else{
		appList = JSON.parse(localStorage.getItem("details"));
	}

	let html = "";

	appList.map( (value,index) => {
		html += `<li class="list-group-item list-group-item-action d-flex justify-content-between" aria-controls="`+ index +`">` + value.subj + `
				<span><button type="button" class="btn btn-outline-warning me-2" id="view"  data-bs-toggle="modal" data-bs-target="#View" onclick="ViewData(`+ index +`)">View</button>
				<button class="btn btn-outline-danger" id="DataDelete" onclick="Delete(`+ index +`)">Delete</button>
				</span></li>`;
	})
	document.getElementById("contentList").innerHTML = html;

} 

document.onload = AllData();

function SaveData(){
	if (validationForm() == true) {
		var subj = document.getElementById("subject").value;
		var cont = document.getElementById("content").value;

	var appList;
	if(localStorage.getItem("details") == null){
		appList = [];
	}
	else{
		appList = JSON.parse(localStorage.getItem("details"));
	}
		appList.push({
			subj: subj,
			cont: cont
		})
		localStorage.setItem("details", JSON.stringify(appList));
		AllData();
			document.getElementById("subject").value = "";
			document.getElementById("content").value = "";
	}
}

function Delete(index){
	var appList;
	if(localStorage.getItem("details") == null){
		appList = [];
	}
	else{
		appList = JSON.parse(localStorage.getItem("details"));
	}
	appList.splice(index, 1);
	localStorage.setItem("details", JSON.stringify(appList));
	AllData();
}

function ViewData(id){
	var appList;
	if(localStorage.getItem("details") == null){
		appList = [];
	}
	else{
		appList = JSON.parse(localStorage.getItem("details"));
	}
	let header = "";
	let body = "";
	let footer = "";
	appList.map((data,index) => {
		if(id == index){
			header += `<h5 class="modal-title" id="subject">`+ data.subj +`</h5>`;
			body   += `<p>`+ data.cont +`</p>`;
			footer += `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        			   <button type="button" class="btn btn-warning" onclick="Edit(`+ index +`)" data-bs-dismiss="modal">Edit</button>`;
		}
	})	

	document.getElementById('modal_subject').innerHTML = header;
	document.getElementById('modal_body').innerHTML = body;
	document.getElementById('modal_footer').innerHTML = footer;
}

function Edit(id){
	document.getElementById('Update').style.display = "block";
	document.getElementById('Cancel').style.display = "block";
	document.getElementById('Save').style.display = "none";

	var appList;
	if(localStorage.getItem("details") == null){
		appList = [];
	}
	else{
		appList = JSON.parse(localStorage.getItem("details"));
	}
		var subj = document.getElementById("subject").value = appList[id].subj;
		var cont = document.getElementById("content").value = appList[id].cont;

		document.querySelector("#Update").onclick = function() {
			if(validationForm() == true){
				appList[id].subj = document.getElementById("subject").value;
				appList[id].cont = document.getElementById("content").value;

				localStorage.setItem("details", JSON.stringify(appList));
				AllData();
					document.getElementById("subject").value = "";
					document.getElementById("content").value = "";

					document.getElementById('Update').style.display = "none";
					document.getElementById('Cancel').style.display = "none";
					document.getElementById('Save').style.display = "block";
			}
		}
		document.querySelector("#Cancel").onclick = function() {
			if(validationForm() == true){
				AllData();
					document.getElementById("subject").value = "";
					document.getElementById("content").value = "";

					document.getElementById('Update').style.display = "none";
					document.getElementById('Cancel').style.display = "none";
					document.getElementById('Save').style.display = "block";
			}
		}
		
}