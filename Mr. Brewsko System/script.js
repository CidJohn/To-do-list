function formValidation(){
	const firstname = document.getElementById('fname').value;
	const middlename = document.getElementById('mname').value;
	const lastname = document.getElementById('lname').value;

	return true;
}

const clearData = () => {
		const firstname = document.getElementById('fname').value = "";
		const middlename = document.getElementById('mname').value = "";
		const lastname = document.getElementById('lname').value = "";
};

const dataRefresher = () => {
	var database;
	if(localStorage.getItem("listName") == null)
	{
		database = [];
	}else
	{
		database = JSON.parse(localStorage.getItem("listName"))
	}
	let html = "";
	let count = 1;
	database.map((data,index) => {
		html += `<tr> 
				 <td>${count}</td>
				 <td>${data.fname}</td>
				 <td>${data.mname}</td>
				 <td>${data.lname}</td>
				 <td>
				 	<button onclick="updateData('${index}')" class="btn btn-outline-warning me-2">Edit</button>
				 	<button onclick="deleteData('${index}')" class="btn btn-outline-danger">Delete</button>
				 </td>
				 </tr>`;
	count++

	})
	document.getElementById("tbody").innerHTML = html;
}
document.onload = dataRefresher();

function saveData() {
	if(formValidation() == true){
		const firstname = document.getElementById('fname').value;
		const middlename = document.getElementById('mname').value;
		const lastname = document.getElementById('lname').value;

		var database;
		if(localStorage.getItem("listName") == null)
		{
			database = [];
		}else
		{
			database = JSON.parse(localStorage.getItem("listName"))
		}
		database.push({
			fname : firstname,
			mname : middlename,
			lname : lastname
		})
		localStorage.setItem("listName", JSON.stringify(database));
		dataRefresher();
		clearData();
	}
}

function deleteData(id){
	var database;
	if(localStorage.getItem("listName") == null)
	{
		database = [];
	}else
	{
		database = JSON.parse(localStorage.getItem("listName"))
	}
	database.splice(id,1);
	localStorage.setItem("listName", JSON.stringify(database));
	dataRefresher();
}

function updateData(id) {
		document.getElementById('Update').style.display = "block";
		document.getElementById('Cancel').style.display = "block";
		document.getElementById('Save').style.display = "none";

		var database;
		if(localStorage.getItem("listName") == null)
		{
			database = [];
		}else
		{
			database = JSON.parse(localStorage.getItem("listName"))
		}

		document.getElementById('fname').value = database[id].fname;
		document.getElementById('mname').value = database[id].mname;
		document.getElementById('lname').value = database[id].lname;

		document.getElementById('Update').onclick = () => {
			if(formValidation() == true)
			{
				database[id].fname = document.getElementById('fname').value
				database[id].mname = document.getElementById('mname').value
				database[id].lname = document.getElementById('lname').value

				localStorage.setItem("listName", JSON.stringify(database));
				dataRefresher();
				clearData();
				document.getElementById('Update').style.display = "none";
				document.getElementById('Cancel').style.display = "none";
				document.getElementById('Save').style.display = "block";
			}
		}
		document.getElementById('Cancel').onclick = () => {
			if(formValidation() == true)
			{
				dataRefresher();
				clearData();
				document.getElementById('Update').style.display = "none";
				document.getElementById('Cancel').style.display = "none";
				document.getElementById('Save').style.display = "block";
			}
		}
}

