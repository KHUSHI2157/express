// function something (){
//     let sum = 0;
// for (let i = 0; i < 1000000000; i++) {
//     sum+=i;
    
// }
// console.log(sum)
// }

// console.log(something)
// console.log("calling something")
// something()

// console.log("this is goof")


// async function!!!

console.log("counting days!!!")

let sum = 0;
function something () {
    setTimeout(() => {
        for (let i = 0; i < 10000; i++) {
            sum += i;
        }

        console.log("id i print from the main setTimeout  fuunction this will wrok fine af: ",sum)
    }, 0);

    console.log("the sum is ", sum)

    console.log(sum)
}

console.log("before counting someshyt like this: ")
console.log("after calling the function")
something()

console.log("fuction called!!! and the sum is: ", sum)