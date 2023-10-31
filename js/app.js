let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let cart = document.querySelector('#cart');


// increment
increment.addEventListener('click', ()=> {
    let cartValue = Number(cart.value);
     cart.value = ++cartValue;
})
// decrement
decrement.addEventListener('click', ()=> {
    let cartValue = Number(cart.value);
    if (cartValue > 1)
     cart.value = --cartValue;
})



// password
let password_btn = document.querySelector('.password_box .btn');
let password_input = document.querySelector('.password_box .password');

password_btn.addEventListener('click', ()=> {
    if(password_input.type === 'text'){
        password_input.type = 'password';
    }
    else{
        password_input.type = 'text';
    }
})
// increment1
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let num = document.querySelector('.num');


plus.addEventListener('click', ()=> {
    let numValue  = Number(num.value);
    num.value = ++numValue;
})
// decrement1
minus.addEventListener('click', ()=> {
    let numValue  = Number(num.value);
    if(numValue > 1)
    num.value = --numValue;
})
// price range

let range = document.querySelector('#pricerange');
   range.addEventListener('input', ()=> {
     document.querySelector('h3').innerHTML = range.value
})

// date

setInterval( ()=>{
    let date = new Date();
    document.querySelector('h2').innerHTML = date
},1000)

// color
function changeColor(){
    let color = document.getElementById('colorinput').value;
    document.body.style.backgroundColor = color;

}