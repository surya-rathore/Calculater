const ac=document.querySelector("#ac");
const dc=document.querySelector("#back");
const decimal=document.querySelector("#decimal");
const divide=document.querySelector("#divide");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const multipul=document.querySelector("#multipul");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const minus=document.querySelector("#minus");
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const plus=document.querySelector("#plus");
const tripal_zero=document.querySelector("#tripal_Zero");
const two_zero=document.querySelector("#double_Zero");
const zero=document.querySelector("#zero");
const equal=document.querySelector("#equal");
const display=document.querySelector("#display");

one.addEventListener("click",()=>{
    display.value +='1';
})
two.addEventListener("click",()=>{
    display.value +='2';
})
three.addEventListener("click",()=>{
    display.value +='3';
})
plus.addEventListener("click",()=>{
    display.value +='+';
})
four.addEventListener("click",()=>{
    display.value +='4';
})
five.addEventListener("click",()=>{
    display.value +='5';
})
six.addEventListener("click",()=>{
    display.value +='6';
})
minus.addEventListener("click",()=>{
    display.value +='-';
})
seven.addEventListener("click",()=>{
    display.value +='7';
})
eight.addEventListener("click",()=>{
    display.value +='8';
})
nine.addEventListener("click",()=>{
    display.value +='9';
})
multipul.addEventListener("click",()=>{
    display.value +='*';
})
ac.addEventListener("click",()=>{
    display.value =' ';
})
back.addEventListener("click",()=>{
    display.value =  display.value.toString().slice(0,-1);
})
decimal.addEventListener("click",()=>{
    display.value +='.';
})
divide.addEventListener("click",()=>{
    display.value +='/';
})
tripal_zero.addEventListener("click",()=>{
    display.value +='000';
})
two_zero.addEventListener("click",()=>{
    display.value +='00';
})
zero.addEventListener("click",()=>{
    display.value +='0';
})
equal.addEventListener("click",()=>{
    display.value = eval(display.value);
})