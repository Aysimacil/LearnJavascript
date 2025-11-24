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

