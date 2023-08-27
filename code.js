let celsius = document.querySelector('#celsius > input')
let fahrenheit = document.querySelector('#fahrenheit > input')
let kelvin = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celsius.addEventListener('input', function(){
    let c = parseFloat(celsius.value)
    let f = (c*(9/5)) + 32
    let k = c + 273.15

    fahrenheit.value = roundNumber(f)
    kelvin.value = roundNumber(k)
})

fahrenheit.addEventListener('input', function(){
    let f = parseFloat(fahrenheit.value)
    let c = (f - 32) * (5/9)
    let k = (f -32) * (5/9) + 273.15

    celsius.value = roundNumber(c)
    kelvin.value = roundNumber(k)
})

kelvin.addEventListener('input', function(){
    let k = parseFloat(kelvin.value)
    let c = k - 273.15
    let f = (k - 273.15) * (9/5) + 32

    celsius.value = roundNumber(c)
    fahrenheit.value = roundNumber(f)
})

btn.addEventListener('click', ()=>{
    celsius.value = ""
    fahrenheit.value = ""
    kelvin.value = ""
})