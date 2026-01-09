// Basic Function
// Arrow Function
// IIFE Function
// Callback Function

// Anonymous Function

// setTimeout(function(){
//   console.log("Hello");
// } , 5000)

// Named Function Expression

// const fact = function factorial(n){
//   return n <= 1 ? 1 : n * factorial(n - 1)
// }

// console.log(fact(5));

// Arrow Function

// const names = () => {
//   console.log("Hello");
// }

// names()

// (() => {
//   console.log("Javascript");
// })()

// Higher-Order Function (HOF)

// function multi(n){
//   return function(k){
//     return k * n
//   }
// }

// const double = multi(10)

// console.log(double("20"));

// object with functions

// function User(name){
//   this.name = name
// }

// const result = new User("Zeel")

// console.log(result.name);

// const Profile = {
//   name:"Akash"
// }

// console.log(Profile.name);

// Method Object Function

// const User = {
//   name:"Alice",
//   result(){
//     return `Hello , ${this.name}`
//   }
// }

// console.log(User.result());

// Generator Function

function* count() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return "Finished";
}

console.log(count());

const gen = count();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

////////////////////////////////////////////////// Async Function

// async function name() {
//   return "Data"
// }

// console.log(name());

/////////////////////////////////////////////////// Pure Function

// function sum(a , b){
//   return a += b
// }

// console.log(sum(10 , 10));
// console.log(sum(20 , 20));

///////////////////////////////////////////////// Impure Function

// let count = 0;

// function addCount(x){
//   count += x
// }

// addCount(10)
// addCount(20)
// addCount(30)

// console.log(count);

// default parameter function
