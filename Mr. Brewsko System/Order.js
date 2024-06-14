function OrderControl(html) {

	document.getElementById('items').innerHTML = html;
}

function SizeControl(html){
	document.getElementById('size').innerHTML = html;
}

var ClickNumber = "";

function NumberControl(number) {
	ClickNumber += number
    document.getElementById('order').innerHTML = ClickNumber;
}

function ClearLastNumber() {
ClickNumber = ClickNumber.slice(0, -1); // Remove the last digit
document.getElementById('order').innerHTML = ClickNumber; // Display the result
}

function ClearNumbers() {
ClickNumber = ""; // Clear the clicked numbers
document.getElementById('items').innerHTML = ""; // Clear the display
document.getElementById('size').innerHTML = ""; // Clear the display
document.getElementById('order').innerHTML = ""; // Clear the display
}

document.getElementById('Milktea').onclick = () => {
	OrderControl("Milktea");
}
document.getElementById('CheeseCake').onclick = () => {
	OrderControl("CheeseCake");
}
document.getElementById('ColdBrew').onclick = () => {
	OrderControl("ColdBrew");
}
document.getElementById('HotBrew').onclick = () => {
	OrderControl("HotBrew");
}
document.getElementById('CoffeeFrappe').onclick = () => {
	OrderControl("CoffeeFrappe");
}
document.getElementById('NonCoffeeFrappe').onclick = () => {
	OrderControl("NonCoffeeFrappe");
}
document.getElementById('PremiumFrappe').onclick = () => {
	OrderControl("PremiumFrappe");
}
document.getElementById('FruitTeaWater').onclick = () => {
	OrderControl("FruitTeaWater");
}
document.getElementById('FruitTeaTea').onclick = () => {
	OrderControl("FruitTeaTea");
}
document.getElementById('YakultSeries').onclick = () => {
	OrderControl("YakultSeries");
}
document.getElementById('FizzySoda').onclick = () => {
	OrderControl("FizzySoda");
}
document.getElementById('ItemClear').onclick = () => {
	document.getElementById('items').innerHTML = "";
}


document.getElementById('Large').onclick = () => {
	SizeControl("Large");
}
document.getElementById('Medium').onclick = () => {
	SizeControl("Medium");
}
document.getElementById('Clear').onclick = () => {
	document.getElementById('size').innerHTML = "";
}


document.getElementById('number1').onclick = function() {
    NumberControl(1);
};
document.getElementById('number2').onclick = function() {
    NumberControl(2);
};
document.getElementById('number3').onclick = function() {
    NumberControl(3);
};
document.getElementById('number4').onclick = function() {
    NumberControl(4);
};
document.getElementById('number5').onclick = function() {
    NumberControl(5);
};
document.getElementById('number6').onclick = function() {
    NumberControl(6);
};
document.getElementById('number7').onclick = function() {
    NumberControl(7);
};
document.getElementById('number8').onclick = function() {
    NumberControl(8);
};
document.getElementById('number9').onclick = function() {
    NumberControl(9);
};

