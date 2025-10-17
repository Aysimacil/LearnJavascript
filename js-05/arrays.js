const countriess = [
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

// let empty=[]
// console.log(webTechs.length)
// console.log(webTechs[0])
// let lastIndex=webTechs.length-1
// let middle=(webTechs.length-1)/2
// console.log(webTechs[lastIndex])
// console.log(webTechs[middle])
// let mixedDataTypes=['name',45,true,false,['selam', 'test'],'test2']
// console.log(mixedDataTypes.length)
 let itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies)
// console.log(itCompanies.length)
// for(let i=0;i<itCompanies.length;i++){
//     console.log(itCompanies[i])
// }
// for(let i=0;i<itCompanies.length;i++){
//     itCompanies[i]=(itCompanies[i]).toUpperCase()
// }
// for(let i=0;i<itCompanies.length;i++){
//     console.log(itCompanies[i])
// }
// for(let i=0;i<itCompanies.length;i++){
//     console.log(`${itCompanies[i]},`)
// }
// console.log('are big IT companies')

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// console.log(`${itCompanies[0]}, ${itCompanies[1]},${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)
let sentence=itCompanies.slice(0,-1).join(', ')+' and '+itCompanies[itCompanies.length-1]+' are big companies'
// console.log(sentence)
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let find=prompt('Enter company')
// let inx=0;
// for(let i =0; i<itCompanies.length;i++){
// if(itCompanies[i]==find){
// inx=1;

// }
// }
// if(inx==1){
//   console.log(` ${find} is found`)
// }else{
//   console.log(` ${find} did not find`)
// }
//Filter out companies which have more than one 'o' without the filter method
itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let count=0
for(let i=0;i<itCompanies.length;i++){
 let word=itCompanies[i]
 for(let j=0;j<word.length;j++){
  if(word[j]=='o'){
    count++
  }
  if(count >1){
    console.log(`${word} have more than one 'o'.`)
  }
 }
 count=0
}
//Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)
//Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)
//Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3))
//Slice out the last 3 companies from the array
// console.log(itCompanies.slice(4,8))
//Slice out the middle IT company or companies from the array
// console.log(itCompanies[(itCompanies.length-1)/2
// ])
//Remove the first IT company from the array
// console.log(itCompanies)
// itCompanies.shift()
// console.log(itCompanies)
//shift() direkt ilk elemanı siler ve geri kalanları sola kaydırır. Orijinal array değişir.
//slice(1) → 1. indexten sona kadar al, yani ilkini atla.
//splice(start, deleteCount) şeklinde çalışır.
// Kısacası:

// Orijinal diziyi değiştirmek istiyorsan → shift() ya da splice(0,1)

// Yeni dizi oluşturmak istiyorsan → slice(1)
//Remove the middle IT company or companies from the array
itCompanies.splice(((itCompanies.length-1)/2),1)
//Remove the last IT company from the array
// console.log(itCompanies)

// itCompanies.splice(-1)
// console.log(itCompanies)
//Remove all IT companies
// itCompanies.splice(0)
// console.log(itCompanies)
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries)
let countriesarray=[]
for(let i=0;i<countries.length;i++){
  countriesarray[i]=countries[i]
}
console.log(countriesarray)

// Exercise: Level 2

// First remove all the punctuations and change the string to array and count the number of words in the array


let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let clean=text.replace(/[^\w\s]/g, "")
console.log(clean)
/**
 📌 Buradaki /[^\w\s]/g ifadesi:

\w → harfler ve rakamlar

\s → boşluklar

^ → bunun dışındakileri seç

g → tümünü uygula
--------
// Sadece ilk eşleşmeyi değiştirir
console.log(text.replace("Hello", "Hi"));
// "Hi World"
------------
console.log(text.replace(/apple/g, "orange"));
// "orange, orange, orange"

 */


// let arr=clean.split(' ')
// console.log(arr)
// console.log(arr.length)
//In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// console.log(shoppingCart)
// shoppingCart.push('Sugar')
// console.log(shoppingCart)
// shoppingCart.splice(4,1)
// shoppingCart[3]='Green Tea'

// console.log(shoppingCart)
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let found=0
let index=-1
for(let i=0;i<countriesarray.length;i++){
  if(countriesarray[i]=='Ethiopia'){
found=1
index=i
break;
  }
}
console.log(index)
countriesarray[index]=countriesarray[index].toUpperCase()
console.log(countriesarray)
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

console.log(webTechs)
// let found=0
// for(let i=0;i<webTechs.length;i++){
// if(webTechs[i]=='Sass'){
//   found=1
// }
// }
if(found){
  console.log('Sass is a CSS preprocess') 
}else{
  webTechs.push('Sass')
  console.log(webTechs)

}
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

/*Exercise: Level 3
The following is an array of 10 students ages:
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
// ages.sort()
// console.log(ages)
// let middle=ages.length/2
// console.log(ages[middle])
// let toplam=0
// for(let i=0;i<ages.length;i++){
//   toplam=toplam+ages[i]
// }
// let avg=toplam/ages.length
// console.log(avg)
// let min=ages[6]
// let max=0
// for(let i=0;i<ages.length;i++){
//   if(ages[i]<min){
//     min=ages[i]
//   }
// }
// for(let i=0;i<ages.length;i++){
//   if(ages[i]>max){
//     max=ages[i]
//   }
// }
// let range=max-min
// console.log(range)
// if(Math.abs(min-avg)>Math.abs(max-avg)){
//   console.log('min ile avg arası daha açık')
// }else{
//   console.log('max ile avg arası daha açık')
// }

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
// console.log(countriesarray.slice(0,10))
// let middle=(countriesarray.length/2).toFixed()
// console.log(countriesarray[middle])
// let arr1=[]
// let arr2=[]
// if(middle%2==0){
//   for(let i=0;i<countriesarray.length;i++){
//     if(i<=middle){
//       arr1[i]=countriesarray[i]
//     }else{
//       for(let j=middle;j<countriesarray.length;j++){
//         arr2[j-middle]=countriesarray[j]
//       }
//     }
//   }
//   console.log(arr1)
//   console.log(arr2)
// }else{
//   for(let i=0;i<countriesarray.length;i++){
//     if(i<=middle){
//       arr1[i]=countriesarray[i]
//     }else{
//         arr2[i-middle-1]=countriesarray[i]
//     }
//   }
//   console.log(arr1)
//   console.log(arr2)
// }

/*
array i tersten yazma push pop shift unshift

🎉 CONGRATULATIONS ! 🎉

*/ 
