function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
function printname(){
    console.log("My name is Aysima");
}
printname()
function fullname(name,surname){
    console.log(`My name is ${name} ${surname}`)
}
fullname("aysima","çil")
const sum=(a,b)=>{
    return a+b
}
console.log(sum(2,3))
function area(length,width){
    const area = length* width
    return area
}
console.log(area(4,3))
let perimeterOfRectangle=(length,width)=>{
    let perimeter= 2*(length + width)
    console.log(perimeter)
}
perimeterOfRectangle(4,3)
let volumeOfRectPrism=(length,width,height)=>{
    let volume = length *width * height
    return volume
}
console.log(volumeOfRectPrism(4,3,2))
function areaOfCircle(r){
     area = Math.PI* r * r
     return area
}
console.log(areaOfCircle(6))
function circumOfCircle (r){
     circumference = 2*Math.PI*r
     return circumference
}
console.log(circumOfCircle(4))
function density (mass,volume){
     density= mass/volume
     return density
}
console.log(density(12,4))
function speed (total,time){
     speed=total/time
     return speed
}
speed(12,4)
function weightOfObjects(mass,gravity=10){
    let weight=mass*gravity
     return weight
}
console.log(weightOfObjects(3))
console.log(weightOfObjects(3,9.1))
function convertCelsiusToFahrenheit(cel){
    let f=(cel*1.8)+32
    return f
}
console.log(convertCelsiusToFahrenheit(-198))
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(kg,height){
    let bmi=kg/(height*height)
    if(bmi<18.5){
        console.log("Underweight: BMI is less than 18.5")
    }
    else if(bmi>=18.5 && bmi<=24.9){
        console.log("Normal weight: BMI is 18.5 to 24.9")
    }
    else if(bmi>24.9 && bmi<29.9){
        console.log("Overweight: BMI is 25 to 29.9")
    }
    else{
        console.log("Obese: BMI is 30 or more")
    }
}
bmi(55,1.59)
function checkSeason(month) {
    if (["Ocak", "Şubat", "Aralık"].includes(month)) {
        console.log("Winter");
    } else if (["Mart", "Nisan", "Mayıs"].includes(month)) {
        console.log("Spring");
    } else if (["Haziran", "Temmuz", "Ağustos"].includes(month)) {
        console.log("Summer");
    } else if (["Eylül", "Ekim", "Kasım"].includes(month)) {
        console.log("Autumn");
    } else {
        console.log("Geçersiz ay");
    }
}
checkSeason("Ocak")
function findMax(a,b,c){
    if(a>b){
        if(a>c){
            return a
        }else{
            return c
        }
    }
    else{
        if(b>c){
            return b
        }
        return c
    }
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))
function solveQuadratic(a=1,b=0,c=0){
const delta=b*b-(4*a*c)
if(delta>0){
   const root1=(-b+Math.sqrt(delta))/(2*a)
    const root2=(-b-Math.sqrt(delta))/(2*a)
    return [root1, root2];
}else if(delta==0){
    const root=-b/(2*a)
    return [root]
}else{
    return []
}
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
function  printArray(arr){
for(const element of arr){
    console.log(element)
}
}
printArray([2,6,5,3,5])
function  showDateTime(){
const now=new Date()
console.log(`${now}`)       
}
showDateTime()
function swapValues(x,y){  
    return [y,x]
}
console.log(swapValues(3, 4))
console.log(swapValues(4, 5))
function reverseArray(arr){
let rev=[]
for(let i=arr.length-1;i>=0;i--){
    rev.push(arr[i])                        
}
return rev
}
console.log(reverseArray([2,3,4,5,6]))
function capitalizeArray(arr){
let cap=[]
for(const element of arr){
    cap.push(element.toUpperCase())
}}
console.log(capitalizeArray(['aysima','çil','hello']))
// function addItem(arr,item){
//     arr.push(item)
//     return arr
// }
// function removeItem(arr,index){
//     if (index >=0) 
//     {arr.splice(index, 1);}
//     return arr
// }
// let i=0
// let arr=[]
// while(i !=-1){
//    let item=prompt("Eklemek istediğiniz sayıyı girin")
//     addItem(arr,item)
//     console.log(arr)
//     i=prompt("devam etmek istmeiyorsanız -1 e basın")
// }
// while(i !=0){
//    let index=prompt("Silmek istediğiniz indexii girin")
//     removeItem(arr,index)
//     console.log(arr)
//     i=prompt("devam etmek istmeiyorsanız 0 e basın")
// }
// function sumOfNumbers(min,max) {
// let sum=0
// while(min!=max){
// sum=min+sum   //7 9
// min++ //4
// if(min==max){
//     return sum+max
// }
// }
// sum=min
// return sum
// }
// console.log(sumOfNumbers(3,9))
// function sumOfOdds(min,max) {
//     let sum=0
//     while (min !=max) {
//         if(min%2==0){
//             sum=sum+min
//         }
//         min++
//     }  
//     if(max %2==0){
//         sum=sum+max
//     } 
//     return sum
// }
// console.log(sumOfOdds(3,6))
// function sumOfEven(min,max) {
//     let sum=0
//     while (min !=max) {
//         if(min%2!=0){
//             sum=sum+min
//         }
//         min++
//     }  
//     if(max %2!=0){
//         sum=sum+max
//     } 
//     return sum
// }
// console.log(sumOfEven(4,5))
// function evensAndOdds(num) {
//     let i=0
//     let sumOdd=0
//     let sumEven=0
//     while(i<=num){
//         if(i%2==0){
//             sumEven++
//         }
//         else{
//            sumOdd++
//         }
//         i++
//     }
//     console.log(`The number of odds are `+sumOdd)
//     console.log(`The number of  are evens `+sumEven)
// }
// evensAndOdds(100);
// function sumOfArguments(...args) {
//     let sum=0
//     for(const element of args){
//         sum +=element
//     }
//     return sum
// }
// console.log(sumOfArguments(4,7,8))
// console.log(sumOfArguments(4,7,8,3,5))
// function randomUserIp() {
//     let dizi=[]
//     let random1=Math.floor(Math.random()*256)
//     let random2=Math.floor(Math.random()*256)
//     let random3=Math.floor(Math.random()*256)
//     let random4=Math.floor(Math.random()*256)
//     dizi.push(random1)
//     dizi.push(random2)
//     dizi.push(random3)
//     dizi.push(random4)
//     // console.log(random1+"."+random2+"."+random3+"."+random4)
//     return dizi.join(".")
// }
// console.log(randomUserIp())
// function randomMacAddress() {
//     let dizi=[]
//     for(let i=1;i<6;i++){
//        let oktet = Math.floor(Math.random() * 256)
//        let hex = oktet.toString(16).padStart(2, '0').toUpperCase()
//        dizi.push(hex)
//     }
//     return dizi.join(':')
// }
// console.log(randomMacAddress())
function randomHexaNumberGenerator() {
    let dizi=['#']
for(let i=1;i<4;i++){
    let randomNum = Math.floor(Math.random() * 256)
    let hexNum = randomNum.toString(16)
    hexNum = hexNum.padStart(2, '0')
    dizi.push(hexNum)
}
    return dizi.join("")
}
// console.log(randomHexaNumberGenerator())
// function userIdGeneratedByUser() {
//     let dizi=[]
//     let i=0
//     let num=prompt("Enter number of characters")
//     let numberid=prompt("Enter number of generated id")
//     while(numberid !=i){
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//      let id = ''
//      for (let i = 0; i < num; i++){
//         let randomIndex = Math.floor(Math.random() * characters.length)
//         id = id + characters[randomIndex]
//     }
//      dizi.push(id)
//     i++
// }
// return dizi
// }
// console.log(userIdGeneratedByUser())
function rgbColorGenerator() {
    let rgb=[]
    for(let i=0;i<3;i++){
        let num=Math.floor(Math.random()*256)
        rgb.push(num)
    }
    return `rgb(${rgb.join(',')})`
}
console.log(rgbColorGenerator())
// function arrayOfHexaColors() {
//     let n=prompt("Enter number of colors")
//     let colors=[]
//     for(let i=0;i<n;i++){
//         let hexcolor='#'
//         for(let j=0;j<6;j++){
//             let randomHex=Math.floor(Math.random()*16).toString(16)
//             hexcolor=hexcolor+randomHex
//         }
//         colors.push(hexcolor)
//     }
//     return colors
    
// }
// console.log(arrayOfHexaColors())
// function arrayOfRgbColors() {
//     let n=prompt("Enter number of colors")
//     let colors=[]
//     for(let i=0;i<n;i++){
//     let rgb=[]
//         for(let j=0;j<3;j++){
//             let random=Math.floor(Math.random()*256)
//             rgb.push(random)
//         }
//         colors.push(`rgb(${rgb.join(',')})`)
//     }
//     return colors
// }
// console.log(arrayOfRgbColors())
// function generateColors(type,num) {
//     let dizi=[]
//     if(type=='hexa'){
//         for(let i=0;i<num;i++){
// dizi.push(randomHexaNumberGenerator())
//         }
//     }else{
//         for(let i=0;i<num;i++){
//            dizi.push(rgbColorGenerator())
//         }
//     }
//     return dizi
// }
// console.log(generateColors('hexa',5))
// console.log(generateColors('rgb',2))
// function convertHexaToRgb(hexColor) {
//     let hex = hexColor.replace('#', '')
//     let r = hex.substring(0, 2)    
//     let g = hex.substring(2, 4)    
//     let b = hex.substring(4, 6)   
//      let redDecimal = parseInt(r, 16)
//     let greenDecimal = parseInt(g, 16)
//     let blueDecimal = parseInt(b, 16) 
//      return `rgb(${redDecimal}, ${greenDecimal}, ${blueDecimal})`
// }
// function convertRgbToHexa(r, g, b) {
// let hexR = r.toString(16)      
//     let hexG = g.toString(16)      
//     let hexB = b.toString(16)
//     hexR = hexR.padStart(2, '0')   // 'a3' → 'a3' (zaten 2 karakter)
//     hexG = hexG.padStart(2, '0')   // 'f2' → 'f2'
//     hexB = hexB.padStart(2, '0')   // 'e1' → 'e1'
//     hexR = hexR.toUpperCase()      // 'a3' → 'A3'
//     hexG = hexG.toUpperCase()      // 'f2' → 'F2'
//     hexB = hexB.toUpperCase()      // 'e1' → 'E1'
//     return '#' + hexR + hexG + hexB
// }
// console.log(convertRgbToHexa(163, 242, 225))
// function shuffleArray(arr,n) {
//     for(let i=0;i<n;i++){
//         let rstg=Math.floor(Math.random()*n)
//         let temp=arr[i]
//         arr[i]=arr[rstg]
//         arr[rstg]=temp
//     }
// }
// let arr1 = [1, 2, 3, 4, 5]
// shuffleArray(arr1, arr1.length)
// console.log(arr1) 
// function isEmpty(arr){
// if(arr.length==0){
//     return 0
// }else{
//     return 1
// }
// }
// function sumss(...args) {
//     let sum=0
//     for(const element of args){
//         sum +=element
//     }
//     return sum
// }
// function sumOfArrayItems(arr){
//     let sum=0
//     for(const element of arr){
//         if(typeof element ==='number'){
//             sum=sum+element
//         }else{
//             console.log("There is another type element in array")
//            break;
//         }
//     }
//     return sum
// }
// console.log(sumOfArrayItems([1, 2, 3, 4]))        // 10
// console.log(sumOfArrayItems([1, 2, 'a', 4]))      // "There is another type element in array" + undefined
// function factorial(num) {
//     if(num==1){
//         return 1
//     }
//     return factorial(num-1)*num
// }
// console.log(factorial(7))
// function average(array) {
//     let sum=0
//     for (let index = 0; index < array.length; index++) {
//         if(typeof array[index] ==='number'){
//             sum=sum+array[index]
//         }else{
//             console.log("There is another type element in array")
//            return
//         }
//     }
//     return sum/(array.length)
// }
// console.log(average([1, 2, 3, 4]))        // 2.5
// function modifyArray(arr) {
//     if(!arr[4]){
//         console.log('Not Found')
//         return
//     }
//     else{
//         let element=arr[4].toUpperCase()
//         arr[4]=element
//         return arr
//     }

// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))
// function isPrime(num) {
//     if (num < 2) return false
//     if (num === 2) return true
//     if (num % 2 === 0) return false
//     for (let i = 3; i * i <= num; i += 2) {
//         if (num % i === 0) return false
//     }
//     return true
// }
// console.log(isPrime(10))
// function unique(array){
// for (let index = 0; index < array.length; index++) {
//     for (let j = index+1; j < array.length; j++) {
//        if(array[index]==array[j]){
//         console.log("it is not unique")
//         return false
//        }
//     }
// }
// return 1
// }
// console.log(unique([1, 2, 3, 4]))
// console.log(unique([1, 2, 3, 4,4]))
function sameData(arr) {
    const firstType = typeof arr[0]
    for(const element of arr){
        if(firstType !== typeof element){
            console.log("there is different data types")
            return false
        }
    }
    return true
}
console.log(sameData(['a', 'b', 'c']))           // true (hep string)
console.log(sameData([1, 'a', 3]))
function isValidVariable(name) {
  if (typeof name !== 'string' || name.length === 0) 
    return false;

  // Identifier pattern
  const idRegex = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
  if (!idRegex.test(name)) return false;

  // Common reserved keywords (ES5/ES6 + literals)
  const reserved = new Set([
    'break','case','catch','class','const','continue',
    'debugger','default','delete',
    'do','else','export','extends','finally','for',
    'function','if','import','in',
    'instanceof','new','return','super','switch',
    'this','throw','try','typeof','var',
    'void','while','with','yield','let','enum',
    'implements','interface','package',
    'private','protected','public','static',
    'await','null','true','false'
  ]);

  return !reserved.has(name);
}
function sevenRandomNumbers() {
  const dizi = [];
  while (dizi.length < 7) {
    const random = Math.floor(Math.random() * 10); // 0..9
    if (!dizi.includes(random)) {
      dizi.push(random);
    }
  }
  return dizi;
}
console.log(sevenRandomNumbers());
function reverseCountries(array) {
    let copy=[]
    for (let index = 0; index < array.length; index++) {
    copy[index] = array[index];
    }
    for(let i=0;i<array.length;i++){
        array[i]=copy[array.length-1-i]
    }
    return array
}