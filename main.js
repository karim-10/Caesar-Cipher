
  
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const keyCipher = document.getElementById("keyCipher")
const inputUser = document.getElementById("inputUser")
let result =document.getElementById("result")
function encrypt() {
    let key = Number(keyCipher.value)

    let encryptedAlphabet = []
    for (let i = 0; i < alphabet.length; i++) {
        if (i + key < alphabet.length) {
            encryptedAlphabet.push(alphabet[i + key])
        } else {
            encryptedAlphabet.push(alphabet[i - alphabet.length + key])
        }
    }
    //console.log(encryptedAlphabet)
    //console.log(inputUser.value)
    let encryptedWord = ""
    for (let i of inputUser.value) {
        console.log(i)
        console.log(alphabet.indexOf(i))
        encryptedWord += encryptedAlphabet[alphabet.indexOf(i)]
    }
    console.log(encryptedWord)

     document.querySelector("#result").innerHTML =  encryptedWord
     
    
}
