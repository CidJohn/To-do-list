
const getURL = 'http://localhost:8080/PHPRestApi/Api/read.php';

async function FetchData(){
	const response = await fetch(getURL);

	if(!response.ok){
		throw new Error("Faild to fetch data");
	}

	const data = await response.json()

	let Table = '';
	console.log(data)
if (Array.isArray(data.data)) {
    // Assuming data.data is an array, you can safely use forEach
    data.data.forEach(item => {
        Table += `
            <tr>
                <td>${item.title}</td>
                <td>${item.autor}</td>
                <td>${item.category_id}</td>
            </tr>
        `;
    });
	document.getElementById("tbody").innerHTML = Table;
} else {
    // Handle other types of responses or empty responses
    console.error('Unexpected response format:', data);
}



}

FetchData();