function func1(){
    return 2;
}

function func2(){
    return 4;
}

let a=(func1(),func2());//my answer is 4 because first fun1-give value 2 and and second return 4  
console.log(a);

let arr=["one","Two","three"];
let str="Four";
const res=arr.includes('on')//in array inclued check full value  so it gives false
const res1=arr.includes('onetwo');  //like same false ('one','two') true
const res3=str.includes('ur')//in string variable includes check all value and any text value if its present

console.log(res,res1,res3);//false,false,true

console.log(typeof(true));//boolean

console.log(typeof(' '));//string

console.log(typeof(12));//number

console.log((1===1));//boolean type true

console.log(('a'=='a'));//boolean type true

console.log(1==='1');//false,== ture ,=== false

console.log(typeof(1)==typeof('1'));

//shallow copy --deep copy

let student={name:"Prabaht"};
let newStudent={...student};
console.log(newStudent);
newStudent.name="Sadab";
console.log(newStudent.name);//sadab
console.log(student.name);//prabhat

console.log(+false);//1,+false=0
console.log(!"xyz");//false
//---------------marge two string--------------------------
function margetwoString(str1,str2){
    let res='';
    for(let i=0;i<str1.length;i++){
        for(j=0;j<str2.length;j++){
            res=str1[i]+str2[j];
        }
    }
    console.log(res);

}

margetwoString("hello","world");