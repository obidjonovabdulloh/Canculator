const accountElement = document.querySelector(".account")
const resultElement = document.querySelector(".result")

function input(i) {
    accountElement.value = accountElement.value + i;
}
function result () {
    if(eval(accountElement.value) == undefined) {
        resultElement.value = '0,00';
        accountElement.value = '0,00'
    } if(eval(accountElement.value) == Infinity) {
        resultElement.value = '0,00'
        accountElement.value = "Infinity"
    }
    resultElement.value = eval(accountElement.value)
    accountElement.value = eval(accountElement.value)
}
function backspace() {
    accountElement.value = accountElement.value.substring(0, accountElement.value.length-1)
}
function reset() {
    resultElement.value = ""
    accountElement.value = '0,00'
}