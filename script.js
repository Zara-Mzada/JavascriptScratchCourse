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

// const grades = [34, 54, 75, 34, 67, 55];
// const student = ["Kamal", "Subhan", "Kemale", "Fahriyye"];

// console.log(student);
// console.log(grades[3]);

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

// function sumOfArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// const newArray = [1, 2, 3, 4, 5];

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// function random(lower, upper) {
//   let randomNumber = Math.floor(Math.random() * (upper - lower + 1) + lower);
//   return randomNumber;
// }
// console.log(random(1, 10));

// function arithmeticMean(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   mean = sum / arr.length;
//   return mean;
// }

// console.log(arithmeticMean([1, 5, 6, 10, 4]));

// function geometricMean(arr) {
//   let mult = 1;
//   for (let i = 0; i < arr.length; i++) {
//     mult *= arr[i];
//   }
//   geomean = Math.pow(mult, 1 / arr.length);
//   return geomean;
// }

// console.log(geometricMean([1, 2, 3, 4, 5, 6, 7, 8]));

// function euclideanDistance(vector1, vector2) {
//   const x1 = vector1[0],
//     y1 = vector1[1];
//   const x2 = vector2[0],
//     y2 = vector2[1];
//   const xDiff = x2 - x1;
//   const yDiff = y2 - y1;

//   return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
// }

// console.log(euclideanDistance([3, 4], [7, 7]));

// function pickOne(array) {
//   const randomIndex = random(0, array.length - 1);
//   return array[randomIndex];
// }

// const name = ["Kamal", "Subhan", "Kemale", "Fahriyye"];
// console.log(pickOne(name));

// function includes(array, x) {
//   for (let i = 0; i < array.length; i++) {
//     if (x === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([5, 4, 6, 2, 7], 3));

// function unique(array) {
//   let uniqueArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const currentItem = array[i];
//     const restOfArray = array.slice(i + 1);

//     if (!includes(restOfArray, currentItem)) {
//       uniqueArray.push(currentItem);
//     }
//   }
//   return uniqueArray;
// }
// console.log(unique([1, 3, 4, 2, 5, 3, 568, 1, 5]));

// function intersection(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     const currentItem = arr1[i];
//     if (includes(arr2, currentItem)) {
//       result.push(currentItem);
//     }
//   }
//   return result;
// }

// console.log(intersection([2, 4, 7, 5, 9], [1, 4, 8, 9]));

// function flat2D(arr) {
//   const flatArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       flatArray.push(arr[i][j]);
//     }
//   }
//   return flatArray;
// }

// console.log(flat2D([[1, 2, 4], [54]]));

// function union(arr1, arr2) {
//   const unArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     unArray.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     unArray.push(arr2[i]);
//   }

//   return unArray;
// }

// console.log(union([2, 3, 4, 5], [7, 6, 5, 9]));

// function reverse(arr) {
//   const reverseArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }
// console.log(reverse([2, 4, 5, 6, 7, 3, 8, 9]));


// function generatePassword(length) {
//   const alph = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

//   let password = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * alph.length);;
//     const randomCharacter = alph[randomIndex];

//     password += randomCharacter;
//   }
//   return password;
// }
// console.log(generatePassword(30));


const number = [1,2,3,-2,6,3,9,-4];

// function compareFn(a, b){
  // if(a>b) return 1;
  // if(a<b) return -1;
  // return 0;
  // console.log(a,b);
//   return a-b;
// }

// number.sort(compareFn);

// function callbackFn(element){
//   console.log(element);
// }
// number.forEach(callbackFn);

// function parent(){
//   function child(){
//     console.log('I am child');
//   }
//   return child;
// }

// parent()();

// function square(x){
//   return x*x;
// }

// var pow = function(x,e){
//   return x ** e;
// }

// ****************** Object ***********************

const student = {
  firstName: 'Qenber',
  lastName: 'Ibrahimov',
  age: 17,
  jobTitle: 'Student',
  ismarried: false,
  address: {
    city: 'Baku',
    country:'Azerbaijan',
  }
};

delete student.age;

student.sayHello = function(){
  console.log('Hello, my name is Intiqam')
};

student['skills']=['Javascript', 'Java'];

console.log(student['address']);