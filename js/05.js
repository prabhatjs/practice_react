//what is pure function?
//a pure function is a function that always returns the same result if the same arguments are passed. 

//--------------------------------------------------------------------------------------------------------------------

// Lambda function in Js?

// Prototype in js?

// factory function ?

// diffrence between constructor function and factory function?


// let arr=[1,2,3,4,5];
// arr.length=0;
// console.log(arr.length);// 0 it set the empty in array and modified
// console.log(arr);//[]

// function abc(){
//     console.log("hello");
// }

// const callme=new abc();//print hello we can call as well function that function we call constructor fun..
// console.log(callme);//abc{}


// console.log('a');

// setTimeout(() => {
//  console.log('b');   
// });//this is in macro task queue in then 

// ['c','d'].forEach((x)=>{
//     console.log(x);
// })
// console.log('E');       //a,c,d,e,b

const obj=[{
    key:'Sample 1',
    data:'Data1',
},
{
    key:'Sample 1',
    data:'Data1',
},
{
    key:'Sample 2',
    data:'Data2',
},{
    key:'Sample 1',
    data:'Data1',
},{
    key:'Sample 3',
    data:'Data3',
},{
    key:'Sample 4',
    data:'Data4',
},
{
    key:'Sample 4',
    data:'Data4',
}
];
//      output should look like this 
// {
//     'Sample 1': [
//       { key: 'Sample 1', data: 'Data1' },
//       { key: 'Sample 1', data: 'Data1' },
//       { key: 'Sample 1', data: 'Data1' }
//     ],
//     'Sample 2': [ { key: 'Sample 2', data: 'Data2' } ],
//     'Sample 3': [ { key: 'Sample 3', data: 'Data3' } ],
//     'Sample 4': [ { key: 'Sample 4', data: 'Data4' } ]
//   }

let output={};
obj.forEach(item=>{
    console.log(item.data);
    if(output[item.key]){
        output[item.key].push(item)
    }else{
        output[item.key]=[item];
    }
})
console.log(output);
//memoization---?

