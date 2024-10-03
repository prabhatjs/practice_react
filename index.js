console.log(a);
console.log(b);
var a=b=5;
/*anser is a is undefined  and b is not define we can not access variable before define
 Yes, you can technically access a variable in JavaScript before its declaration, 
 but the behavior depends on how the variable is declared:
Using var:
With var, variables are hoisted to the top of their scope (function or global) during compilation.
This means the variable declaration is moved to the top, but the assignment remains in place.
If you access a var variable before its declaration, it will have the value undefined.*/

var a=2;
var a=5;
console.log(a);//anser is 5 if we let  a=5 and let a=5 give error because a is already defined.


const arr=[[1,2],[3,4],[5,6]];
//it doesnt change old array ,you can define the depth of nesting in 
console.log(arr.flat(1));
//if array has sub array in it self then we use flat method for join them in single array..


//without inbuit method

console.log("4"+6 * 5)//answer is 430
console.log("4" * 6 + 5)//answer is 29 becuase * change string into number 

console.log(typeof(NaN));//Numbertypeof(NaN) is a number because it is a numeric value. 
//It's called "Not a Number" because it represents the idea of an "invalid" number. NaN means unknown number. It's without a value.

console.log(typeof(undefined));//undefined

console.log(NaN);

console.log('5'-'3' +6);//8 5-3=2 because of type Coercion

const chararray=['z','a','d','b','e'];//sort them without inbuilt

    function sortstring(arr1){
       
        for(let i=0;i<arr1.length-1;i++){
        for(let j=0;j<arr1.length-1;j++){
            if(arr1[j].charCodeAt(0)>arr1[j+1].charCodeAt(0)){
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
        }
        return arr1;
    }
   console.log(sortstring(chararray));


   console.log(NaN==NaN)//

   console.log(NaN===NaN)//false

   