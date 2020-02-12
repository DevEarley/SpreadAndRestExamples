console.clear();

let iteration_example_IV = (function () {
	console.log("************* Math Functions Example II *************");
	let someArrayOfNumbers = [9,7,8,3,4,1,2,3,5,6];
	let smallestNumber =Math.min(...someArrayOfNumbers);
	console.log("Min: "+smallestNumber);	
	let wrongSmallestNumber =Math.min(someArrayOfNumbers);
	console.log("NaN Min: "+wrongSmallestNumber);	
})();

