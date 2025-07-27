// console.log(a); // undefined, because 'wife' key does not exist in the object
// var a =10;

// console.log(b); // error, because 'b' is not defined yet
// let b =2;

// let c = 5;
// let d = 10;
// console.log(c + d); // 15

"10"+"20"; // '1020' - string concatenation (num + string =>string)
// 10 + 20; // 30 - number addition

// tips
// black color -string
// blue color - number

// string concatenation ans number addition

// let a =10;
// let b =2;
// console.log("sum of a and b is"+a + b); // 'sum of a and b is102' - string concatenation
// console.log("sum of a and b is"+(a + b)); // 'sum of a and b is12' - number addition
// console.log((a + b)+" is sum of a and b "); // '12 is sum of a and b ' - number addition


// type coercion
"1"+1; // '11' - string concatenation
"1"-1; // 0 - number subtraction (string converted to number)

// prompt is a function to take input from user
// and it returns a string

// let userName = prompt("Enter your name"); // retunrs a string
// let userName2 = Number(prompt("Enter your name")); // returns a number if the input is a valid number, otherwise NaN


// TYPE CONVERSION / TYPE CASTING

// Number is a function to convert a string to a number if possible otherwise it returns NaN

// let a= Number("10"); // 10 - string converted to number
// let b= Number("10abc"); // NaN - string cannot be converted to number

// SWAPPING VARIABLES

// method 1: using a temporary variable
// let x = 10;
// let y = 20;
// let z = x; // z = 10
// x = y; // x = 20
// y = z; // y = 10

// // method 2: using array destructuring assignment
// [x, y] = [y, x]; // x = 20, y = 10 

// method 3: using arithmetic operations
let a1 = 10;
let b1 = 20;
a1 = a1 + b1; // a1 = 30
b1 = a1 - b1; // b1 = 10
a1 = a1 - b1; // a1 = 20


// ARITHMETIC OPERATORS
let num1 = 10;
let num2 = 20;
let sum = num1 + num2; // 30

let diff = num1 - num2; // -10

let prod = num1 * num2; // 200

let div = num1 / num2; // 0.5
let floorDiv = Math.floor(num1 / num2); // 0 (integer division)

let mod = num1 % num2; // 10
let mod2 = num2 % num1; // 0 (20 is divisible by 10)

let exp = num1 ** 2; // 100 (10 raised to the power of 2)


// how to find last digit of a number
let number = 12345;
let lastDigit = number % 10; // 5 (last digit of 12345)
// if need to find last two digits than
let lastTwoDigits = number % 100; // 45 (last two digits of 12345)

// how to find first digit of a number
let firstDigit = Number(String(number)[0]); // 1 (first digit of 12345)

// how to remove last digit of a number
let withoutLastDigit = Math.floor(number / 10); // 1234 (removes
// if need to remove last two digits than
let withoutLastTwoDigits = Math.floor(number / 100); // 123 (removes last two digits of 12345)

// RELATIONAL OPERATORS
let a2 = 10;
let b2 = 20;
console.log(a2 < b2); // true
console.log(a2 > b2); // false
console.log(a2 <= b2); // true
console.log(a2 >= b2); // false
console.log(a2 == b2); // false (value equality)
console.log(a2 === b2); // false (value and type equality)
console.log(a2 != b2); // true (value inequality)
console.log(a2 !== b2); // true (value and type inequality)

// we should always use === and !== for comparison
// because == and != do type coercion which can lead to unexpected results


// && and || operators
let x1 = 10;
let y1 = 20;
console.log(x1 < y1 && x1 > 5); // true (both conditions are true)
console.log(x1 < y1 || x1 > 5); // true (one condition is true)
console.log(x1 < y1 && x1 < 5); // false (one condition is false)
console.log(x1 < y1 || x1 < 5); // true (one condition is true)

// Unary ++ and -- operators
let z1 = 10;
console.log(z1++); // 10 (post-increment, returns the value before increment)
console.log(z1); // 11 (after increment)
console.log(++z1); // 12 (pre-increment, returns the value after increment)
console.log(z1--); // 12 (post-decrement, returns the value before decrement)
console.log(z1); // 11 (after decrement)
console.log(--z1); // 10 (pre-decrement, returns the value after decrement

// eg
let i =11;
i=i++ + ++i;
console.log(i); // 24 (i++ returns 11, ++i returns 13, so 11 + 13 = 24)

// let a=11, b=22;
// let c = a+b + a++ + b++ + ++a + ++b;
// console.log(c); // 99 (a=12, b=23 after the operations,

let b =true;
b++;
console.log(b); // 2 (true is converted to 1, so 1 + 1 = 2)

// let d =11++;
// console.log(d); // error, because 11 is a constant and cannot be incremented
// // hum cannot increment a constant value like 11, it should be a variable

// let e = 11;
// let f =++(e++);
// console.log(f); // error, because e++ is post-increment and cannot be used with ++ operator


// MATH FUNCTIONS

console.log(Math.round(4.5)); // 5 (rounds to nearest integer)
console.log(Math.floor(4.5)); // 4 (rounds down to nearest integer)
console.log(Math.ceil(4.5)); // 5 (rounds up to nearest integer)
console.log(Math.abs(-4.5)); // 4.5 (absolute value)
console.log(Math.max(1, 2, 3)); // 3 (maximum value)
console.log(Math.min(1, 2, 3)); // 1 (minimum value)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // random integer between 0 and 9
console.log(Math.trunc(4.5)); // 4 (truncates the decimal part)
console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
console.log(Math.sqrt(16)); // 4 (square root of 16)
console.log(Math.cbrt(27)); // 3 (cube root of 27)

// generating random integer 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // random integer between 1 and 10
// generating random integer between x and y
let x = 5;
let y = 15;
console.log(Math.floor(Math.random() * (y - x + 1)) + x); // random integer between x and y (inclusive)

// generating a otp

console.log(Math.floor(Math.random()*9000)+1000);

// PARAMETERS AND AREA OF RECTANGLE
// area = l*b
// parameter = 2*(l+b)


// heron's formula for area of triangle
let a3 = 5;
let b3 = 6;
let c3 = 7;
let s = (a3 + b3 + c3) / 2; // semi-perimeter
let areaOfTriangle = Math.sqrt(s * (s - a3) * (s - b3) * (s - c3)); // area of triangle using Heron's formula
console.log(areaOfTriangle); // area of triangle   

// curcumference of circle
let radius = 5;
let circumference =Number( (2 * Math.PI * radius).toFixed(2)); // circumference of circle
console.log(circumference); // circumference of circle