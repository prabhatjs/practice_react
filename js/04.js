//what is output

setTimeout(function(){
    console.log("hello");//second print this becuase it is asynchronous function
})
console.log("heeloo");//first execute.
//-------------------------------------------------------------------------------------------
setTimeout(function(){
    console.log("setTimeout");//2
});
//
Promise.resolve(6).then(function(){
    console.log("promise resolve");//1
})

/*Event Loop:
JavaScript's event loop prioritizes microtasks (like promises) over macrotasks (like setTimeout).
Promise.resolve():
This method creates a resolved promise, which immediately gets added to the microtask queue.
setTimeout():
This function schedules a task to be executed after a specified delay (even if it's 0). This task is added to the macrotask queue.
Therefore, the microtask queue is processed before the macrotask queue, causing Promise.resolve() to execute first.*/

console.log(1+'1'+1);//conact 111,stype is string

console.log(typeof(1-'1'+1));//1 number 

const arr=[1,3,4,5];
//mutliplication of the element use of reduce function 

console.log(arr.reduce((prev,cur)=>prev*cur));//60


const arr1=[1,2,4,6];
console.log(arr1.shift());//first value of array remove fist value

console.log(arr1.unshift())//return the length of array and and vale begin of array

//splice vs slice 
console.log(arr1.slice(0,3));//it cut the array form to index like first postion skip and second position 

arr1.splice(0,1,'10','30');
console.log(arr1);
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
fruits.splice(2, 2);

console.log(isNaN("hello"));//ture 

isNaN(console.log(2));//print 2 

//higher order function explain?

//first order function ?

//check iit is array or not

let arr2=[];

console.log(Array.isArray(arr2));//return true 

let arr3=[[1,3],[1,4]];

console.log(arr3.flat(1).indexOf(3));

//types of error in js
TypeError
ReferenceError
SyntaxError

//TDZ temporal dead zone?

x=10;

var x;
console.log('-----------'+x);//10