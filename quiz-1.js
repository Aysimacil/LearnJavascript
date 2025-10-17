console.log('Let us do the quiz')

//question 1

// function makeSquare(a){
// return a*a
// }
// console.log(makeSquare(3))


// const makeSquare= function(a){
// return a*a
// }
// console.log(makeSquare(3))

// const  makeSquare=(a)=>{
// return a*a
// }
// console.log(makeSquare(3))

//question 2

const ages=[22,25,28,30,35,40,19,38,24,32]
// let a=0
// for(const age of ages){
//     a=a+age
// }
// let avg=a/ages.length
// console.log(avg)
// function calculateAvgrate(arr){
//     let a=0
//     for(const ar of arr){
//         a=a+ar
//     }
//     let avg=a/arr.length
//     console.log(avg)
// }
// calculateAvgrate(ages)
// calculateAvgrate([2,4,6,8])
// console.log(countries)
// const landers=[]
// for(const country of countries){
//     if(country.includes('land')){
//         landers.push(country)
//     }
// }
// console.log(landers)
function countryLand(arr){
    for(const country of arr){
        const landers=[]
        if(country.include('land')){
            landers.push(counrty)
        }
    }
    return landers
}
const countriesStartWith = (arr,char) =>{
    const withF=[]
    for(const country of arr){
        if(country.startsWith(char)){
        withF.push(country)
        }
    }
    return withF
}
console.log(countriesStartWith(countries,'S'))