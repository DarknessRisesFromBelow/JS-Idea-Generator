let a = ["pizza","code", "snake", "apple", "app", "tea", "tree", "binary", "zip", "simulation", "free"] 
let b_words = ["with", "without", "application", "runner", "executer", "parsed", "gamified", "generates"]

function name(){
	let value1 = Math.floor(Math.random() * a.length);
	let value2 = Math.floor(Math.random() * b_words.length);
	let value3 = Math.floor(Math.random() * a.length);

	let b = a[value1];
	let c = b_words[value2];
	let d = a[value3];

	let e = b + " " + c + " " + d 
	let f = document.getElementById("GenerationText");

	f.innerHTML = e;
}

window.onload = function() {
 	name();
};
