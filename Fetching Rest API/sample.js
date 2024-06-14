fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => {
			return res.json()
		})
		.then(data => {
			let tableData = "";
			data.map(value =>{
				tableData += `<tr>
							    	<td>${value.name}</td>
							      <td>${value.email}</td>
							      <td>${value.phone}</td>
							    </tr>`;
			})
			document.getElementById("tbody").innerHTML = tableData;
		})
		.catch(error => {
			console.log(error);
		})
