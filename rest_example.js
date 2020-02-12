/* REST
Rest properties collect the remaining field names that are not already picked off by the destructuring pattern. 
Those keys and their values are copied onto a new object.
*/
console.clear();
let rest_example = (function(){
	console.log("**************** Rest Example ****************");
	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	console.log("x: "+x)
	console.log("y: "+y)
	console.log("z: "+JSON.stringify(z))
})();
