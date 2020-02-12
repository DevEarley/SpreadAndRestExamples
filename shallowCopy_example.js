console.clear();

let shallowCopy_example = (function () {
    console.log("**************** Shallow Copy Example ****************");
	let someChild = {children:[{id:1},{id:2}]}
	let someObject = {prop1:true,prop2:false,child:someChild};
	let shallowCopy = {...someObject}; 
	someChild.children[0].id = 3;
	console.log("someObject === shallowCopy: "+(someObject === shallowCopy));
	console.log("Child Affected: "+(shallowCopy.child.children[0].id === 3));
})();
