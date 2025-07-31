// if(true or false){
//     // code
// }

// if('hello'){

// }



// let ans = Number(prompt('enter your age'));

// // NaN === NaN output:- false. in js google it why it is like that.
// // isNaN(NaN) :- true.

// if(isNaN(ans)){
//     console.log("enter a valid number");
//     alert('enter a valid number')
// }

// else if(ans>=18){
//     console.log('your are a valid voted');
//     alert('you can vote')
// }else{
//     console.log('you are under age and u cant vote');
//     alert('you can not vote')
// }



// DISCOUNT COUNTER

// 0-5000=>0
// 5000-7000=>5%
// 7000-9000=>10%
// amount>9000=>20%


// let amount = Number(prompt('what is the final amount'));
// let dis =0;
// if(amount >0 && amount<=5000){
// //  console.log(amount);   
// dis =0
// }else if(amount>5000 && amount<=7000){
//     dis =5;
// }else if(amount>7000 && amount<=9000){
//     dis = 10;
// }else if(amount>9000){
//     dis =20;
// }else{
//     alert('wrong input')
// }
// alert(`total payble amount will be ${amount - Math.floor((dis*amount)/100)}`)



// BIJLI BILL
// 4=> <=100
// 6=> 101<200
// 8=> 201<300
// 13=> 300<

// let unit = Number(prompt('enter ur unit'));
// let totalBill = 0
// if(unit>400){
//    totalBill += (unit-400)*13
//    unit = 400;
// }
// if(unit>200 && unit<=400){
//      totalBill += (unit-200)*8
//    unit = 200
// }
// if(unit>100 && unit<=200){
//      totalBill += (unit-100)*6
//    unit = 100;
// }

// totalBill += 100*4;

// console.log(totalBill);
// alert(`total payble amount is ${totalBill}`)


//  INR DENOMINATION
//  Notes-cash-500,200,100,500,10,5,2,1

// let amount = 4622;


// if(amount>=500){
//    console.log(`500 notes : ${Math.floor(amount/500)}`);
//    amount= amount%500
   
// }
// if(amount>=200){
//     console.log(`200 notes : ${Math.floor(amount/200)}`);
//    amount= amount%200
// }
// if(amount>=100){
//     let note = Math.floor(amount/100);
//     console.log(`no of 100 rupees u get = ${note}`)
//     amount%=100;
// }
// if(amount>=50){
//     let note = Math.floor(amount/50);
//     console.log(`no of 50 rupees u get = ${note}`)
//     amount%=50;
// }
// if(amount>=20){
//     let note = Math.floor(amount/20);
//     console.log(`no of 20 rupees u get = ${note}`)
//     amount%=20;
// }
// if(amount>=10){
//     let note = Math.floor(amount/10);
//     console.log(`no of 10 rupees u get = ${note}`)
//     amount%=10;
// }
// if(amount>=5){
//     let note = Math.floor(amount/5);
// console.log(`no of 5 rupees u get = ${note}`)
//     amount%=5;
// }
// if(amount>=2){
//     let note = Math.floor(amount/2);
//     console.log(`no of 2 rupees u get = ${note}`)
//     amount%=2;
// }
// if(amount>=1){
//     let note = Math.floor(amount/1)
//         console.log(`no of 1 rupees u get = ${note}`)
//     amount%=1;
// }


// TERNARY OPERTOR

// 112>13 ? console.log('herhere') : console.log('jdsfusifos');
// console.log(112>14 ? "hello " : "heleio");


// NESTED TERNAR OPERATOR

// let num =0;
// console.log(num>0?'positve' : num<0 ? 'negative' : 'zero');


// SWITCH CASE

// let day =1;

// switch(day){
//     case 1 : console.log('monday');
//     break
//     case 2 : console.log('tuesday');
//     break
//     default : console.log('invalid');
// }
// if we remove than this condition is called fall through condition

// MULTIPLE CASE SAME ANSWER
let day =1;
switch(day){
    case 1 : 

    case 2 : 
    case 3 : console.log('same answer for 1,2and 3 ');
    break
    
    default : console.log('invalid');
}

// USE IF ELSE IN THE SWITCH CASE

switch(false){
    case 19>10:
        console.log('hello');
        break
    case 10<9:
        console.log('hslafa');
        break
    default : console.log('invalid');
}

// PRECISION RATIO
let num = 0.2 + 0.1
switch(num){
    case 0.3:
        console.log('hello'); //because .2 +.1 =.300000001
        break
    case 0.4:
        console.log('hslafa');
        break
    default : console.log('invalid');
}
