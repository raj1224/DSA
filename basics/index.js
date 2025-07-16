console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');


// "raj" - String
// 7 - Number
// Boolean - true,false 

const a ="raj";
const b = 20;
const c = a + b;
const multiply = a * b;

console.log(multiply);
console.log(c); // behind the scene it will convert b to string and then add
// js engine will convert the number to string and then add and it is very heavy operation
// so it is not recommended to do this


// ARRAY
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// index starts from 0
console.log(arr[0]); // 1
console.log(arr[11]); // undefined

let arr2 = ['raj', 'kumar', 20, true, null, undefined, [1, 2, 3]];
console.log(arr2[0]); // 'raj'
console.log(arr[6][2]); // 3


// OBJECT 
// key value pair
// key is always a string
// value can be anything - string, number, boolean, array, object, function
let obj = {
    name: 'raj',
    age: 20,    
    isStudent: true,
}
console.log(obj.name); // 'raj'
console.log(obj['age']); // 20
console.log(obj.isStudent); // true
console.log(obj.wife); // undefined

