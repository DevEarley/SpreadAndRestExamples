console.clear();

let iteration_example_II = (function () {
	console.log("************* Iteration Example II *************");
	let countries = ['India', 'USA'];
	let otherCountries = ['China', 'Japan'];
	countries.unshift(...otherCountries);
	console.log(countries);
	// China, Japan, India, USA
})();
