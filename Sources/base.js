let a = ["fata","hamelech", "met", "aleicha"] 

function name(){
	let value1 = "itay";
	let value2 = Math.floor(Math.random() * 3);
	let value3 = Math.floor(Math.random() * 3);

	let b = value1;
	let c = a[value2];
	let d = a[value3];

	let e = b + " " + c + " " + d 
	let f = document.getElementById("GenerationText");

	f.innerHTML = e;
}

window.onload = function() {
 	name();
};