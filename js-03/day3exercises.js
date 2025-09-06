//?  Day 3: Exercises
// *Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName='ayse'
// let lastName='demir'
// let country='turkiye'
// let city='mersin'
// let age=20
// let isMarried=false
// let year=2025

// console.log(typeof age)
// console.log(typeof country)
// console.log(typeof isMarried)
// Check if type of '10' is equal to 10
// console.log(typeof '10' ==typeof 10)

// Check if parseInt('9.8') is equal to 10
// console.log(typeof parseInt('9.8') == typeof 10)   

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// let a=5
// let b=4
// let c=3.45
// console.log(typeof a== typeof b)
// console.log(a>b)
// console.log(a>c)
// Write three JavaScript statement which provide falsy value.
// console.log(typeof a == typeof 'selam')
// console.log(c> a)
// console.log(a==b)

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//T 4 > 3 
// console.log(4 === '4')
//T 4 >= 3 
//F 4 < 3
//F 4 <= 3
//T 4 == 4
//T 4 === 4
//F 4 != 4
//F 4 !== 4
//FALSE 4 != '4'
//T 4 == '4'
//F 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
// console.log('python'.length ==('jargon'.length)+1)
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// console.log(!(4=='4'))
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
// console.log('dragon'.includes('on') && 'python'.includes('on'))
// Use the Date object to do the following activities
// const now= new Date()
// What is the year today?
// console.log(now.getFullYear())
// What is the month today as a number?
// console.log(now.getMonth())
// What is the date today?
// console.log(`Today is ${now.getDay()}.${now.getMonth()}.${now.getFullYear()}`)
// What is the day today as a number?
// console.log(now.getDay())
// What is the hours now?
// console.log(now.getHours())
// What is the minutes now?
// console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(now.getTime())
// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let height=prompt('enter height: ')
// let base=prompt('enter base: ')
// let triangle=height*base*0.5
// console.log(triangle)

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let a=Number(prompt('enter a:'))
// let b=Number(prompt('enter b:'))
// let c=Number(prompt('enter c:'))
// console.log(`perimeter is: ${a+b+c}`)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length=Number(prompt('Enter length:'))
// let width=Number(prompt('Enter width: '))
// let area=length*width
// let perimeter=2*(length+width)
// console.log(`Area is ${area}\nPerimeter is ${perimeter}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let r=Number(prompt('enter radius:'))
// const pi=3.14
// let area= pi*r*r
// let circumference=2*pi*r
// console.log(`area is ${area}\ncircumference is ${circumference}`)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x1=Number(prompt('enter x1'))
// let x2=Number(prompt('enter x2'))
// let y1=2*x1-2
// let y2=2*x2-2
// let slope=(y2-y1)/(x2-x1)
// console.log(slope)
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x=Number(prompt('enter x:'))
// let y=x**2+6*x+9
// console.log(y)

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hour=Number(prompt('enter hour: '))
// let rate=Number(prompt('enter rate per hour: '))
// console.log(`your weekly earning is ${hour*rate}`)
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.
// let names=prompt('enter your name:')
// if(names.length>7){
//     console.log('your name is long')
// }else{
//     console.log('your name is short')
// }

// Compare your first name length and your family name length and you should get this output.
// let firstName = prompt('enter your name:')
// let lastName = prompt('enter your last name:')
// if(firstName.length>lastName.length){
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }else{
//     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// }
    
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge=Number(prompt('enter myage: '))
// let yourAge=Number(prompt('Enter yourage:'))
//  console.log(`I am ${myAge-yourAge} older than you`)
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let year=Number(prompt('enter birth year:'))
// let age=Number(2025-year)
// if(age>18){
//     console.log(`You are ${age}.You are old enough to drive`)
// }else{
//     console.log(`You are ${age}.You will be allowed to drive after ${18-age} years.`)
// }
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let years=Number(prompt('Enter number of years you live:'))
// console.log(`You lived ${years*365*24*60*60} seconds.`)
// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object
// const now= new Date()
// let year=String(now.getFullYear()).padStart(2,0)
// let month=String(now.getMonth()+1).padStart(2,0)
// let day=String(now.getDay()).padStart(2,0)
// let hour=String(now.getHours()).padStart(2,0)
// let minute=String(now.getMinutes()).padStart(2,0)
// console.log(`${year}-${month}-${day} ${hour}:${minute}`)
// console.log(`${day}-${month}-${year} ${hour}:${minute}`)
// console.log(`${day}/${month}/${year} ${hour}:${minute}`)
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05