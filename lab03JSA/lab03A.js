let rot13= {
    'a':'n',
    'b':'o',
    'c':'p',
    'd':'q',
    'e':'r',
    'f':'s',
    'g':'t',
    'h':'u',
    'i':'v',
    'j':'w',
    'k':'x',
    'l':'y',
    'm':'z',
    'n':'a',
    'o':'b',
    'p':'c',
    'q':'d',
    'r':'e',
    's':'f',
    't':'g',
    'u':'h',
    'v':'i',
    'w':'j',
    'x':'k',
    'y':'l',
    'z':'m'
}

Object.keys(rot13).forEach((key)=>{
    console.log(person[key])
    
}) 
console.log(rot13[key])



let userstring = prompt('Please enter a string:  ')
const data = Object.values(rot13);
let new_word = []
let newstring = new_word.push(userstring)

      

// alert(Object.values(rot13))



// alert(data[userstring])


// for (key in rot13){
//     console.log(rot13[key])
// }

// // '''alert(rot13[userstring])'''
// let data = []
// // let new_word = []
// let newstring = new_word.push(userstring)
// // alert(newstring)

// for (key in rot13){
//     let new_word = []
//     new_word.push(key)
//     new_word.push(rot13[key])
//     data.push(new_word)
//     // let newstring = new_word.push(userstring)
    
// }

// console.log(data)
// for (let char in rot13) {
//     let value = rot13[char]
//     console.log(char + '' + rot13[char])
// }

// for (let letter in newstring){
//     new_word.push(rot13[letter])
//     console.log(letter)
// }

// alert(''.join(new_word))
// for (let letter of newstring){
//     console.log(letter)
// }

// iterate over the keys/properties of an object
// for (char in rot13) {
//     console.log(char + ' ' + rot13[char])
// }


