
const country = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Iceland',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0;i<10;i++){
//   console.log(`${i}`)
// }
// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let i=10;i>-1;i--){
//   console.log(`${i}`)
// }
// Iterate 0 to n using for loop
// let n=prompt(`enter number`)
// for(let i=0;i<n;i++){
//   console.log(`${i}`)
// }
// Write a loop that makes the following pattern using console.log():
// let i=0
// let c=''
// while(i<7){
//   console.log('#'+c)
//   i++
//   if(i<7){
//     c=c+'#'
//   }
// }
// Use loop to print the following pattern:
// for(let i=0;i<11;i++){
//   console.log(`${i} x ${i} = ${i*i}`)
// }
// Using loop print the following pattern
// console.log('i  i^2  i^3')
// for(let i=0;i<11;i++){
//   console.log(`${i}  ${i*i}  ${i*i*i}`)
// }
// Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i=0;i<100;i++){
//   if(i%2==0){
//     console.log(`${i}`)
//   }
// }
// Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i=0;i<100;i++){
//   if(i%2!=0){
//     console.log(`${i}`)
//   }
// }
// Use for loop to iterate from 0 to 100 and print only prime numbers
// for(let i=1;i<=100;){
//   if(i==2){
//     console.log(`${i}`)
//   }
//   for(let c=2;c<i;){
//     if(i%c==0){
//       break;
//     }
//     c++
//     if(i==c){
//       console.log(`${i}`)
//     }
//   }
//   i++
// }
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let a=0;
// for(let i=0;i<=100;i++){
//   a=i+a
// }
// console.log(`The sum of all numbers from 0 to 100 is ${a}.`)
// let even=[];
// let odd=[];
// for(let i=0;i<=100;i++){
//   if(i%2==0){
//     even.push(i)
//   }
//   else{
//     odd.push(i)
//   }
// }
// console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)
// let sum=[]
// let a=0
// let b=0
// for(const number of even){
// a=a+number
// }
// sum.push(a)
// for(const number of odd){
// b=b+number
// }
// sum.push(b)
// console.log(sum)
// let rand=0
// let arr=[]
//  rand=Math.floor(Math.random()*100)
//   arr.push(rand)
// for(let i=0;i<5;i++){
//  rand=Math.floor(Math.random()*100)
//  for(let i=0;i<arr.length;i++){
//    if(arr[i] ==rand){
//   break;
//   }
//   arr.push(rand)
//  }
// }
// console.log(arr)
// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let arr=[]
// for(let i=0;i<5;i++){
//   let n=Math.floor(Math.random()*100)
//   arr.push(n)

// }
// console.log(arr)
// for(let i=0;i<5;i++){  
//   for(let j=0;j<5;j++){
//     if(i !=j && arr[i]==arr[j]){
//       arr[i]=Math.floor(Math.random()*100)
//     }
//   }
// }

// let arr = [];

// while (arr.length < 5) {
//   let n = Math.floor(Math.random() * 100);
//   if (!arr.includes(n)) { // aynı sayı yoksa ekle
//     arr.push(n);
//   }
// }

// console.log(arr);
let arr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// let sifre=""
// for(let i=0;i<6;i++){
//   let random=arr.charAt(Math.floor(Math.random()*arr.length));
//   sifre +=random
// }
// console.log(sifre)
// Exercises: Level 2
// Develop a small script which generate any number of characters random id:
// let sifre=""
// let num=prompt("Enter num: ")
// for(let i=0;i<num;i++){
//   let random=arr.charAt(Math.floor(Math.random()*arr.length));
//   sifre +=random
// }
// console.log(sifre)  
// let hex="abcdef0123456789"
// let hexnum="#"
// for(let i=0;i<6;i++){
//   let random=hex.charAt(Math.floor(Math.random()*hex.length))
//   hexnum +=random
// }
// console.log(hexnum)
// Write a script which generates a random rgb color number.
// let n1=Math.floor(Math.random()*256)
// let n2=Math.floor(Math.random()*256)
// let n3=Math.floor(Math.random()*256)
// console.log(`rgb(${n1},${n2},${n3})`)
// Using the above countries array, create the following new array.

// Using the above countries array, create an array for countries length'.
// const countriesLength=[]
// for(let i=0;i<country.length;i++){
//   countriesLength.push(country[i].length)
// }
// console.log(countriesLength)
// const countriesLength = country.map(country => country.length);
// console.log(countriesLength);
// let comp=[]
// let loCountry=[]
// for(let i=0;i<country.length;i++){
//   loCountry[i]=country[i];
// }
// let array=[]
// for(let i=0;i<country.length;i++){
  
//     let set=country[i]
//     country[i]=set.toUpperCase()
// }
// console.log(country)
// console.log(country)
// for(let i=0;i<country.length;i++){
// comp.push([loCountry[i],country[i].slice(0,3),countriesLength[i]])
// }
// console.log(comp)
// let lands=[]
// for(let i=0;i<country.length;i++){
//   if(country[i].includes('ia')){
//     lands.push(country[i])
//   }
// }
// console.log(lands)
// let max=country[0];
// for(let count of country){
//   if(count.length>max.length){
//     max=count
//   }
// }
// console.log(max)
// let arr1=[]
// for(let count of country){
//   if(count.length==5){
//     arr1.push(count)
//   }
// }
// console.log(arr1)
// let copy=[]
// for(let i=0;i<country.length;i++){
//   copy[i]=country[i]
// }
// console.log(copy)
// let sortedCountries=country.sort()
// let sortedWebTechs=webTechs.sort()
// let sortedMernStack=mernStack.sort()
// console.log(sortedWebTechs)
// console.log(sortedMernStack)
// console.log(sortedCountries)
// let land=[]
// for(let count of country){
//   if(count.includes('land')){
// land.push(count)
//   }
// }
// console.log(land)
// let max=country[0];
// for(let count of country){
//   if(count.length>max.length){
//     max=count
//   }
// }
// console.log(country)
// console.log(max)
// let arr1=[]
// for(let count of countries){
//   if(count.length==4){
//     arr1.push(count)
//   }
// }
// let twoWord=[]
// for(let count of countries){
//   if(count.includes(' ')){
//     twoWord.push(count)
//   }
// }
// console.log(twoWord)
// console.log(arr1)
// console.log(countries)
let reverse=[]
for(let i=0;i<countries.length;i++){
reverse.unshift(countries[i].toLocaleUpperCase())
}
console.log(reverse)

