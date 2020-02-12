console.clear();

let spread_example_I = (function(){
	console.log("**************** Spread Example I ****************");
	let x = 1;
	let y = 2;
	let z = {a:3,b:4};
	let n = { x, y, ...z };
	//let n = { x, y, z };
	console.log("n: "+JSON.stringify(n))
})();