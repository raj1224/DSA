// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');


// jitna jyada lines utna jyada size file ka
// jyada line -> file ka size jyada -> user ko time lgega website load krne me ->user experience bad -> company band ho skti h .

// Loop -> for/while/do while

// for loop
// for (let index = 0; index < 600; index++) {
//     console.log(index);   
// }

// reverse
// let i=200
// for(;i>99;i--){
//     console.log(i);
// }
// console.log(`${i} fail`);

// infinite
// for(;;){
//     console.log(hello);
// }

// SUM OF N NATURAL NUMBERS

// let pr =prompt('enter your number')
// if(pr===null){
//     console.log('canceled');
// }else{
//     let num = Number(pr);
// if(isNaN(num)){
//     console.log('enter a valid number');
// }else{
//     if(num<=0){
//         console.log('number should be +ve of greated than zero');
//     }else{
//         // coding
//         // console.log(`your answer will be ${(num*(num+1))/2}`);

//         // by forloop
//         let sum =0
//         for(let i=1;i<=num;i++){
//             sum=sum+i;
//         }
//         console.log(sum);

            // using while 
            // if(n>0){
            //     var sum =0;
            //     while(n>0){
            //         var rem =n%10;
            //         sum=sum+rem;
            //         n=Math.floor(n/10);
            //     }
            //     console.log(sum);
            // }
//     }
// }
// }

// agr prompt ko cancel krde to answer null aata h.

// Note:- aisse code likhna sikho jo hr case me handle ho.


// FACTORIAL
// let pr =prompt('enter your number')
// if(pr===null){
//     console.log('canceled');
// }else{
//     let num = Number(pr);
// if(isNaN(num)){
//     console.log('enter a valid number');
// }else{
//     if(num<=0){
//         console.log('number should be +ve of greated than zero');
//     }else{
//         // coding

//         // by forloop
//         let fact =1
//         for(let i=1;i<=num;i++){
//             fact=fact*i;
//         }
//         console.log(fact);
//     }
// }
// }


// Note:- use chatgpt to optimize ur code u will learn more concepts

// FIND FACTORS OF A NUMBER
// let pr =prompt('enter your number')
// if(pr===null){
//     console.log('canceled');
// }else{
//     let num = Number(pr);
// if(isNaN(num)){
//     console.log('enter a valid number');
// }else{
//     if(num<=0){
//         console.log('number should be +ve of greated than zero');
//     }else{
//         // coding

//         // by forloop

//         for(let i=1;i<=Math.floor(num/2);i++){
//             if(num%i===0){
//                 console.log(`${i} is the factor of number ${num}`);
//                 // n number ke half se uppr koi bhi number uska factor ni hoga keval n ko chhodke to
//                 // hum n ki jagah n/2 kr skte h. loop me 
//             }
//         }
//         console.log(`${num} is the factor of ${num}`);
        
//     }
// }
// }


// PRIME NUMBER
// let pr =prompt('enter your number')
// if(pr===null){
//     console.log('canceled');
// }else{
//     let num = Number(pr);
// if(isNaN(num)){
//     console.log('enter a valid number');
// }else{
//     if(num<=0){
//         console.log('number should be +ve of greated than zero');
//     }else{
//         // coding

//         // by forloop
//         // let isprime=true;
//         // for(let i =2;i<=Math.floor(num/2);i++){
//         //     if(num%i===0){
//         //         isprime=false
//         //         break;
//         //     }
//         // }
//         // console.log(isprime);

//         // Better way
//         console.log(isPrime(num))
//     }
// }
// }
// function isPrime(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2===0) return false;
//     for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i===0) return false
//     }
//     return true;
// }

// BOOK RESOURCE:-CRACKING THE CODING INTERVIEWS


// break & continue

// while(ans !== 'exit'){
//     ans = prompt('kuch bhi likh le pr exit mt likhna')
// }


// REVERSE A NUMBER

let pr =prompt('enter your number')
if(pr===null){
    console.log('canceled');
}else{
    let num = Number(pr);
if(isNaN(num)){
    console.log('enter a valid number');
}else{
    if(num<=0){
        console.log('number should be +ve of greated than zero');
    }else{
        // coding
        let rev=0;
        while(num>0){
            let last=num%10;
            rev=rev*10 +last
            num=Math.floor(num/10);
        }
        console.log(rev);
        
    }
}
}


