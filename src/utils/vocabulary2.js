import {obj} from "./vocabulary.js"


// const userInput = "python for if else while hello world"

// const slicedInput = userInput.split(" ");

export const getTrimOutput = (userInput) =>{
    const trimInput = []
    const slicedInput = userInput.split(" ");
    // console.log(slicedInput)
    slicedInput.forEach((elem, idx) => {
    if(idx !==0){
        trimInput.push(" ")
    }
    if(!(elem in obj)){
        elem.split("").forEach(e => trimInput.push(e))
    }else{
        trimInput.push(elem)
    }})
    // console.log("trim output", trimInput)
    return trimInput;




} 

export const encode = (trimInput) => {
   const encodedInput = []
   trimInput.forEach((elem) => encodedInput.push(obj[elem]))
   return encodedInput
}
export const decode = (encodedInput) => {
   const decodedInput = []
   encodedInput.forEach((elem) => {
    const decodedElement = Object.keys(obj).find(key => obj[key] == elem)
    console.log("helo1", Object.keys(obj))
    console.log("i am decode element",decodedElement)   
    decodedInput.push(decodedElement)
   })
   return decodedInput
}
// const trimInput = []

// const encodedInput = []
// slicedInput.forEach((elem) => {
//     if(!(elem in obj)){
//         elem.split("").forEach(e => trimInput.push(e))
//     }else{
//         trimInput.push(elem)
//     }
// })

// trimInput.forEach((elem) => encodedInput.push(obj[elem]))
// console.log(trimInput);
// console.log(encodedInput);