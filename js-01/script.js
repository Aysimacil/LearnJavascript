// console.log("hello world")
// console.log(9 - 3)
// console.log(8 / 4)
// console.log(5)
// // console.log(countries)
// // Variables
// //data type data types
// //var let const
// let firstName='Aysima'
// console.log(firstName)
// let lastName='Cil'
// let fullName=firstName+' '+lastName
// console.log(fullName)
// console.log('conca'+'tentaion')
// let a=2
// let b=3
// let sum=a+b
// console.log(sum)
// let diff=b-a
// console.log(diff)
// let product=a*b
// console.log(product)
// let div=b/a
// console.log(div)
// let remainder=b%a
// console.log(remainder)
// let exp=a**b
// console.log(exp)
// //!Homework Section -1
// //comments  can make code readable
// let str='this is string'
// let bool=false
// let Un
// let zero =null
// console.log(zero)
// console.log(typeof(bool))

// let name='ayse' ;let lname='kara';let status='married';let country='Holland';let age='32'
// let myAge='20'
// let yourAge='32'
// console.log('I am '+myAge+' years old.\n'+'You are '+yourAge+' years old.')
//!Homework Section -2
// let title='30 Days Of JavaScript.'
// console.log(title)
// console.log(title.length)
// console.log(title.toUpperCase())
// console.log(title.toLowerCase())
// console.log(title.substring(0,8))//başlangıç ve bitiş inndexi alır
// console.log(title.substr(11,10))//index ve kaç harf keseceği olmak üzere iki argüment alır
// console.log(title.slice(3,21))
// console.log(title.includes('Script'))
// console.log(title.split())
// console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(' '))
// console.log(title.replace('JavaScript','Python'))
// console.log(title.charAt(15))
// console.log(title.charCodeAt('J'))
// console.log(title.indexOf('a'))
// console.log(title.lastIndexOf('a'))
// console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
// console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
// console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))
// console.log('           hello     world'.trim())
// console.log(title.startsWith(3))
// console.log(title.endsWith('.'))
// console.log(title.match(/a/g))
// let string=''
// console.log(string.concat('30 Days of').concat(' JavaScript'))
// console.log(title.repeat(2))
// let p='The quote \'\There is no exercise better for the heart than reaching down and lifting people up.\'\ by John Holmes teaches us to help one another.'
// console.log(p)
// console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
// console.log(typeof'10'==typeof 10)
// let num=Number('10');
// console.log(typeof num === 'number')
// console.log(parseFloat('9.8')==10)
// let num2=parseFloat('9.8')
// if(num2===10){
//     console.log('eşittir',num2)
// }else{
//     num2=10;
//     console.log('artık eşit',num2)
// }

// if('python'.includes('on')&& 'jargon'.includes('on')){
//     console.log('yes');
// }else{
//     console.log('no')
// }
// console.log('I hope this course is not full of jargon'.includes('jargon'))
// let randomnum=Math.random()
// let numzerotohundred=Math.floor(randomnum*100)
// let fiftytohundred=Math.floor((randomnum*(100-50+1))+50)
// let zerototwohundred=Math.floor((randomnum*(255)+1))
// console.log(zerototwohundred)
// console.log(fiftytohundred)
// console.log(numzerotohundred)
// console.log(Math.floor(randomnum*11))
// let random=Math.random()*(8+1)
// let js='JavaScript'
// console.log(js.charAt(random))
// let a=1
// let b=1
// console.log(b*a,a,b*a,b*b,b*b*b)
// b=2
// console.log(b*a,a,b*a,b*b,b*b*b)
// b=3
// console.log(b*a,a,b*a,b*b,b*b*b)
// b=4
// console.log(b*a,a,b*a,b*b,b*b*b)
// b=5
// console.log(b*a,a,b*a,b*b,b*b*b)
// console.log('You cannot end a sentence with because because because is a conjunction'.substr(31,24))
// let per='Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(per.match(/love/gi))
// console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/g))
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// let cleanText=sentence.replace(/[^a-zA-Z0-9 ]/g,"")
// let words=cleanText.split(' ')
// console.log(words)
// let wordCount={}
// for(let word of words){
//     word = word.toLowerCase(); 
//     wordCount[word]=(wordCount[word] || 0)+1
// }
// console.log(wordCount)
// let mostWord=''
// let counter=0
// for(let word in wordCount){
//     if(wordCount[word]>counter){
//         counter=wordCount[word]
//         mostWord=word
//     }
// }
// console.log(`Most frequent word: "${mostWord}" (${counter} times)`);
// let newsentence='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let words=newsentence.split(' ')
// let num1=Number(newsentence.substring(9,13))
// let numt=Number(newsentence.substring(42,47))
// let num3=Number(newsentence.substring(67,73))
// let salary=num1*12+numt+num3*12
// console.log(`The salary is ${salary}`)
// let numbers=newsentence.match(/\d+/g).map(Number)
// console.log(numbers)
// let nums1=numbers[0]*12
// let nums2=numbers[1]
// let nums3=numbers[2]*12
// console.log(`the salar is ${nums1+nums2+nums3}`)

// let text = "I love JavaScript and I love coding";
// let result = text.match(/love/g);
// console.log(result);

// let text2 = "My number is 12345 and my code is 67890";
// let result2 = text2.match(/\d+/g); //içindeki rakamları bulur
// console.log(result2);

