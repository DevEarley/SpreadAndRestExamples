console.clear();

let iteration_example_I = (function () {
    console.log("************* Iteration Example I *************");
    let countries = ['India', 'USA'];
    let otherCountries = ['China', 'Japan'];
    countries.push(...otherCountries);
    console.table(countries);
    otherCountries[1] = "Mexico";	
    console.table(otherCountries);
})();


let iteration_example_Ia = (function () {
    console.log("************* Iteration Example Ia *************");
    let countries = ['India', 'USA'];
    let otherCountries = ['China', 'Japan'];
    let newCountries = [...countries, ...otherCountries]
    otherCountries[1] = "Mexico";
    console.table(newCountries);
})();