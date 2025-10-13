// const arr =  [1,2,3,4,5]

// console.log(arr.map(arr => arr*2))

// 2.

const arr1=  [1,3,4,5,7,8]
const fs = require('fs')

// console.log()


const sum  = (a,b) => {
    return a+b
}
fs.writeFileSync('result.txt' , `the sum is  ${sum(3,4)}`)