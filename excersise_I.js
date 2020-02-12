console.clear();

let excersise_I = (function(){
	console.log("************* Excersise I *************");
	let someArrayOfNumbers = [9,7,8,3,4,1,2,3,5,6];
	let expectedOutcome = [9,7,8,3,4,1,2,3,5,6,9,7,8,3,4,1,2,3,5,6];

	let duplicate = (...onlyOneParam) => //rest
	{
		return [...onlyOneParam, ...onlyOneParam]; //spread 
	}

	var outcome = duplicate(...someArrayOfNumbers);//spread
	console.log("Outcome: "+JSON.stringify(outcome))
	console.log("Valid: "+(JSON.stringify(outcome) == JSON.stringify(expectedOutcome)))

	var outcome2 = duplicate(someArrayOfNumbers);//one param
	console.log("Outcome2: "+JSON.stringify(outcome2))
	console.log("Valid2: "+(JSON.stringify(outcome2) == JSON.stringify(expectedOutcome)))

	let duplicate2 = (onlyOneParam) => //one param
	{
		return [...onlyOneParam, ...onlyOneParam]; //spread
	}

	var outcome3 = duplicate2(someArrayOfNumbers); // one param
	console.log("Outcome3: "+JSON.stringify(outcome3))
	console.log("Valid3: "+(JSON.stringify(outcome3) == JSON.stringify(expectedOutcome)))
})();
