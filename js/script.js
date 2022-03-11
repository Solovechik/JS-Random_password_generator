const lCase = 'abcdefghjkmnpqrstuvwxyz'
const uCase = lCase.toUpperCase();
const digits = (Array.from(Array(10).keys())).join('').slice(2)
const symbols = '!#$%&*+-=?@^_.'
const confusingSymbols = 'ilLoO01'
const defaultLength = 8
let resultAlph = lCase

let ra = document.getElementById('length-input')
ra.addEventListener('input', null)

document.getElementById('option-letters').addEventListener('change', editLetters)
function editLetters() {
    if (document.getElementById('option-letters').checked === true) {
        resultAlph += lCase
    } else {
        resultAlph = resultAlph.replace(lCase, [])
    }
}

document.getElementById('option-capitals').addEventListener('change', editCapitals)
function editCapitals() {
    if (document.getElementById('option-capitals').checked === true) {
        resultAlph += uCase
    } else {
        resultAlph = resultAlph.replace(uCase, [])        
    }
}

document.getElementById('option-digits').addEventListener('change', editDigits)
function editDigits() {
    if (document.getElementById('option-digits').checked === true) {
        resultAlph += digits
    } else {
        resultAlph = resultAlph.replace(digits, [])        
    }
}

document.getElementById('option-symbols').addEventListener('change', editSymbols)
function editSymbols() {
    if (document.getElementById('option-symbols').checked === true) {
        resultAlph += symbols
    } else {
        resultAlph = resultAlph.replace(symbols, [])        
    }
}


document.getElementById('option-confusing').addEventListener('change', editConfusingSymbols)
function editConfusingSymbols() {
    if (document.getElementById('option-confusing').checked === true) {
        resultAlph += confusingSymbols
    } else {
        resultAlph = resultAlph.replace(confusingSymbols, [])        
    }
}


function generatePassword() {
    passwords = []
    for (let i = 0; i < 4; i++){
        let password = ''
        for (let j = 0; j < (ra.value ? ra.value : defaultLength); j++) {
            let rn = Math.floor(Math.random() * resultAlph.length)
            password += resultAlph[rn]
        }
        passwords.push(password)
    }
    if (resultAlph.length !== 0) {
        for (let i = 1; i <= passwords.length; i++) {
        document.getElementById(`password${i}`).textContent = passwords[i - 1]
    }
    } else {
        for (let i = 1; i <= passwords.length; i++) {
            document.getElementById(`password${i}`).textContent = 'No parameters'
    }
}
}

function copyPassword(num) {
    let copy = document.getElementById(`password${num}`).textContent
    navigator.clipboard.writeText(copy)
}
