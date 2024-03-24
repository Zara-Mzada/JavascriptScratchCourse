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

// ####################### ARRAYS ###########################

const grades = [34, 54, 75, 34, 67, 55];
const student = ["Kamal", "Subhan", "Kemale", "Fahriyye"];

console.log(student);
console.log(grades[3]);

// student.unshift("Bahar"); //evvele elave edir, shift() evvelden silir
// student.push("Aydin"); //axira elave edir, pop() axirdan silir
// student.indexOf('Aydin') //soun indexini gosterir
// student.splice(2, 2, 'Zehra', 'Gulbadam'); //silib elave ede bilir
//student.fill('salam', 3); // arrayi doldurur
// const arr = [1,4,6,8,5];
// const arr1 = [3,5,7];
// arr1.concat(arr); // arrayleri birlesdirir
// console.log(arr1)

// console.log(student.length);
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   grades[i] = grades[i] * 2;
// }
// console.log(grades);

// ----------------- 2D array
// const example = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];

// for(let i=0; i<example.length; i++){
//     for(let j=0; j<example[i].length; j++){
//       console.log(example[i][j]);
//     }
// }

// ##################### FUNCTIONS ######################
// function primeNumber(x) {
//   let isPrime = true;
//   for (let k = 2; k < x; k++) {
//     if (x % k == 0) {
//       return false;
//     }
//   }
//   return isPrime;
// }

// let n = 100;
// let count = 0;
// for (let number = 2; number <= n; number++) {
//   if (primeNumber(number)) {
//     count++;
//   }
// }

// const students = ["Eltun", "Qenber", "Aysun", "Zehra", "Turan"];

// for (let i = students.length - 1; i >= 0; i--) {
//   console.log(students[i], i);
// }

// default parameter
// function sumElement(array = [1, 3, 4]) {}

// function variadicFunction() {
//   console.log(arguments);
// }

// const arr = [8, 3, 67, 1, 5, -2, 3, 1];

// function findMinimun(array){
//     min = array[0];

//     for(let i=0; i< array.length; i++){
//         if(min > array[i]){
//             min = array[i];
//         }
//     }
//     return min;
// }

// console.log(findMinimun(arr));