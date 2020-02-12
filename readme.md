Just when I was getting comfortable with JS and TS, I run across something I have never seen before..

	let someChild = {children:[{id:1},{id:2}]}
	let someObject = {prop1:true,prop2:false,child:someChild};
	let shallowCopy = {...someObject}; 
	someChild.children[0].id = 3;
	console.log("someObject === shallowCopy: "+(someObject === shallowCopy));
	console.log("Child Affected: "+(shallowCopy.child.children[0].id === 3));
	//"someObject === shallowCopy: false"
	//"Child Affected: true"
	

Cool, I can tell what this is doing. The code above will result in a Shallow Copy of the object. It takes the properties of 'someObject' and the '...' operator will return a shallow copy of these properties. Not too sure how this is useful yet. A better copy function would use stringify.

	function deepCopy(obj){
		return JSON.parse(JSON.stringify(obj));
	}
	let someChild = {children:[{id:1},{id:2}]}
	let someObject = {prop1:true,prop2:false,child:someChild};
	let deepCopy = deepCopy(someObject); 	
	someChild.children[0].id = 3;
	console.log("someObject === deepCopy: "+(someObject === deepCopy));
	console.log("Child Affected: "+(deepCopy.child.children[0].id === 3));
	//"someObject === deepCopy: false"
	//"Child Affected: false"
	

The function above takes your object, turns it into a string, then deserializes that string into a JSON object. No way there can be any references at this point. Mutating any part of the resulting obj will only affect obj. Where a obj cloned with the '...' operator will be a shallow copy. Mutating a object that is referenced by the shallow copy will reflect in the shallow copy. Thus affecting all objects with a reference to that object. No bueno. 

I want to find out why I should learn this new syntax and why is it practical. After some googling I found a few handy articles. 

[https://tc39.github.io/proposal-object-rest-spread/](https://tc39.github.io/proposal-object-rest-spread/)

[https://dmitripavlutin.com/how-three-dots-changed-javascript/](https://dmitripavlutin.com/how-three-dots-changed-javascript/)

[https://blog.mariusschulz.com/2016/12/23/typescript-2-1-object-rest-and-spread](https://blog.mariusschulz.com/2016/12/23/typescript-2-1-object-rest-and-spread)

Ah-ha! It's called 'Spread' or 'Rest'. What is the difference between 'Spread' and 'Rest'? They are essentially the same '...' syntax, just different patterns. 

# Rest

> Rest properties collect the remaining field names that are not already picked off by the destructuring pattern. Those keys and their values are copied onto a new object.

	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	console.log("x: "+x)
	console.log("y: "+y)
	console.log("z: "+JSON.stringify(z))
	// x: 1
	// y: 2
	// z: {'a':3,'b':4}
	

So Rest will take the **rest** of the fields and put them into an array. I am skeptical of new ideas like this. They add some complexity in the form of something new to learn. If one of my team-members saw this, it may just confuse them. So I am still not sure how this is useful. 

# Spread
> Spread properties in object initializers copies field names and their values from a provided object onto the newly created object.

	let x = 1;
	let y = 2;
	let z = {a:3, b:4};
	let n = { x, y, ...z };
	console.log("n: "+JSON.stringify(n))
	// n: {'x':1,'y':2,'a':3,'b':4}
	
	
Spread will take a collection and **spread** them out. This seems like a clean way to concat any kind of array or object. 
	
	let x = {prop1:true, prop2:false};
	let y = {prop3:1, prop4:2}
	let n = {...x, ...y}
	console.log("n: "+JSON.stringify(n))
	//n: {'prop1':true,'prop2':false,'prop3':1,'prop4':2}
	
	
That seems useful! But what else can we do with these?

# Real World Applications

**Cloning**
Well as I mentioned before, spread works well for concatenation. But wait a second, at the top of this post I mention using spread to clone will only result in a shallow copy. Mutating any child array after a clone with this method will result in all instances of that array being mutated. 

This isn't the clone you were looking for.  \**Jedi-Hand-Wave*\* 

Wait, what if I want a really clean looking solution to concatenating two really simple objects? I guess '...a ,...b' is slightly easier to read than a.concat(b). Maybe, maybe not. 

**Function Definitions**
Rest can do something else though, it can describe function parameters as an array.

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
	//Sum of 2,2,2: 6
	//Sum of 2,3,2,2,1: 10
	
Alternatively, you may pass an array as a list of parameters. 

	...
	var arrayOfValues = [1,2,3];
	var sumOfArray = sum(...arrayOfValues);
	console.log("Sum of [1,2,3]: "+ sumOfArray);
	//Sum of [1,2,3]: 6
	
Finally! Something useful! Or how about this.. 

	function filter(type, ...items) {  
		return items.filter(item => typeof item === type);
	}
	var boolValues = filter('boolean', true, 0, false);	
	var numberValues = filter('number', false, 4, 'Welcome', 7);
	console.log("Boolean values: "+boolValues);
	console.log("Number values: "+numberValues);
	//Boolean values: true,false
	//Number values: 4,7
	

**Iteration**
	
	let countries = ['India', 'USA'];
	let otherCountries = ['China', 'Japan'];
	countries.push(...otherCountries);
	console.log(countries);
	// India, USA, China, Japan
	

or 

	let countries = ['India', 'USA'];
	let otherCountries = ['China', 'Japan'];
	countries.unshift(...otherCountries);
	console.log(countries);
	// China, Japan, India, USA
	

This allows us to use a function like push. Push only takes one parameter but with spread we can pass the entire array. No for-loop needed. Neat! 

I am starting to see myself using '...' more and more.


**Math Functions**
Just like above, the spread operator allows us to pass an array were you would normally pass a list of parameters. Math functions are defined to take parameters for each coefficient rather than an array.

So instead of this:
	
	Array.prototype.min = function() {
    var r = this[0];
    this.forEach(function(v,i,a){if (v<r) r=v;});
    return r;
	};
	let someArrayOfNumbers = [9,7,8,3,4,1,2,3,5,6];
	let smallestNumber = someArrayOfNumbers.min();
	console.log("Min: "+smallestNumber);	
	

All we would need to do is this!

	let someArrayOfNumbers = [9,7,8,3,4,1,2,3,5,6];
	let smallestNumber =Math.min(...someArrayOfNumbers);
	console.log("Min: "+smallestNumber);
	

# [Post, ...Conclusion]

Rest and Spread work well for shallow objects. The new syntax will be helpful in reducing code size and making code easier to read. Hopefully it is more useful than confusing. I may understand it, but only after half a day of research. My colleagues may see this and reject the new syntax.

Now, I will continue to look for examples of this new concept as I learn Typescript and Angular. Angular introduces the concept of Observables and other wacky things. I am interested in seeing all of these concepts working together.

Here is the codepen for all of the of the examples in this post: [https://codepen.io/DevEarley/pen/RJRqpO](https://codepen.io/DevEarley/pen/RJRqpO)

If you use this operator regularly please comment, let me know how you use it.
