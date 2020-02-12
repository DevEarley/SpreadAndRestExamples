console.clear();

let iteration_example_III = (function () {
	console.log("************* Math Functions Example I *************");
	Array.prototype.min = function() {
		var r = this[0];
		this.forEach(function(v,i,a){if (v<r) r=v;});
		return r;
	};
	let someArrayOfNumbers = [9,7,8,3,4,1,2,3,5,6];
	let smallestNumber = someArrayOfNumbers.min();
	console.log("Min: "+smallestNumber);	
})();
