console.clear();

let function_definitions_example_II = (function(){
	console.log("************* Function Definitions Example II *************");
	function filter(type, ...items) {  
		return items.filter(item => typeof item === type);
	}
	var boolValues = filter('boolean', true, 0, false);	
	var numberValues = filter('number', false, 4, 'Welcome', 7);
	console.log("Boolean values: "+boolValues);
	console.log("Number values: "+numberValues);
})();