function validationForm() {
	let height = document.getElementById('height').value;
	let weight = document.getElementById('weight').value;

	return true;
}

function formula(height, weight) {
	//let heightInM = height /100; cm
	let heightInM = height * 0.3048;

	let bmi = weight / (heightInM * heightInM);

	let bmiDec = bmi.toFixed(2);

	let status = getBMIStatus(bmi);

	return { bmi: bmiDec, status: status };
}

function getBMIStatus(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function EnterData(){
	let height = document.getElementById('height').value;
	let weight = document.getElementById('weight').value;

	let Result = formula(height, weight);

	document.getElementById('Result').innerHTML = Result.bmi;
	document.getElementById('Status').innerHTML = Result.status;
}
