console.clear();

let function_definitions_example = (function(){
	console.log("************* Function Definitions Example I *************");
	function sum (...numbers) {
		let result = 0;
		numbers.forEach(function(n){
			result += n;
		});
		return result;
	};
	var sumOf3Numbers = sum(2,2,2);
	var sumOf5Numbers = sum(2,3,2,2,1);
	console.log("Sum of 2,2,2: "+ sumOf3Numbers);
	console.log("Sum of 2,3,2,2,1: "+ sumOf5Numbers);	

	var arrayOfValues = [1,2,3];
	var sumOfArray = sum(...arrayOfValues);
	console.log("Sum of [1,2,3]: "+ sumOfArray);
})();
