console.clear();

let deepCopy_example = (function () {
	console.log("**************** Deep Copy Example ****************");
	function deepCopy(obj){
		return JSON.parse(JSON.stringify(obj));
	}
	let someChild = {children:[{id:1},{id:2}]}
	let someObject = {prop1:true,prop2:false,child:someChild};
	let brandNewObject = deepCopy(someObject); 	
	someChild.children[0].id = 3;
	console.log("someObject === deepCopy: "+(someObject === brandNewObject));
	console.log("Child Affected: "+(brandNewObject.child.children[0].id === 3));
})();