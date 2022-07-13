
let button=document.getElementById('calculate')
button.addEventListener('click',()=>{
    let amount=document.getElementById('amount').value
    amount=parseFloat(amount)

    // console.log(amount);
    let rate=document.getElementById('rate').value
    rate=parseFloat(rate)/100;
    // console.log(rate);
    let compound=document.getElementById('compound').value
    compound=parseFloat(compound)
    // console.log(compound);
    let time=document.getElementById('time').value
    time=parseFloat(time);
    // console.log(time);
    // console.log(typeof(time));

    let a=amount*(1+(rate/compound))**(compound*time);
    console.log(a);
    document.getElementById('screen').value=a;

})
document.getElementById('clear').addEventListener('click',()=>{
let inputs=document.getElementsByTagName('input');
// console.log(inputs);
inputs=[...inputs];
inputs.forEach((singleinput)=>{
singleinput.value=""
})
})




