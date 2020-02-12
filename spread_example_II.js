console.clear();

let spread_example_II = (function(){
	console.log("**************** Spread Example II ****************");
	let x = {prop1:true, prop2:false};
	let y = {prop3:1, prop4:2}
	let n = {...x, ...y}
	console.log("n: "+JSON.stringify(n))
})();