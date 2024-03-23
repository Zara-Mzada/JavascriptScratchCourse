// ------------ 1 exercise
//  var N=10;

//  let sum=0;

//  for (let i=1; i<=N; i++){
//     sum+=i;
//  }

//  console.log(sum);

// ------------- 2 exercise
// let count=0;
// const n=67
// for(let num =1; num<=n; num++){
//     let isPrime = true;

//     for (let k=2; k<num; k++){
//         if(num%k===0){
//             isPrime = false;
//             break;
//         }
//     }
    
//     if(isPrime){
//         count++;
//     }
// }

// console.log(`from 1 to ${n} there are ${count} prime number`)

// -------------- 3 exercise
// let factorial = 1;
// for (let i=1; i<=N; i++) {
//     factorial*=i;
// }
// console.log(factorial);


// -------------- 4 exercise
// let result="";
// for (let i=1; i<=4; i++ ){
//     for(let j=1; j<=4 ; j++){
//         result = result + "#";
//     }
//     result = result + '\n';
// }

// console.log(result);

// -------------- 5 exercise
// let num =1;
// let result="";
// for (let i=1; i<=4; i++ ){
//     for(let j=1; j<=i ; j++){  
//         result = result + num + " ";
//         num++;
//     }
//     result = result + '\n';
// }

// console.log(result);

// -------------- 6 exercise

// let binary = 10101011;
// let decimal = 0;
// let index = 0;
// while(binary > 0){
//     const lastDigit = binary%10;
//     const power = 2 ** index;
//     decimal = decimal +(lastDigit*power);
//     binary = Math.floor(binary/10);
//     index++;
// }
// console.log(decimal)

// -------------- 7 exercise
// let first =1;
// let second = 1;

// for(let i=0; i<N ;i++){
//     const current = first +second;
//     console.log(current)
//     first=second;
//     second=current;
// }