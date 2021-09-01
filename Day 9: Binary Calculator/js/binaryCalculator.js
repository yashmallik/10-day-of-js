let res = document.querySelector("#res")
let btn1 = document.querySelector("#btn1");
let btn0 = document.querySelector("#btn0");
let btnC = document.querySelector("#btnClr");
let btnEql = document.querySelector("#btnEql");
let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");

let  sign = "";

// adding Event Listner

btn1.addEventListener('click', recieve);
btn0.addEventListener('click', recieve);
btnC.addEventListener("click", clear);
btnEql.addEventListener("click", solution);
btnSum.addEventListener('click', recieve);
btnSub.addEventListener('click', recieve);
btnMul.addEventListener('click', recieve);
btnDiv.addEventListener('click', recieve);



function recieve(e){
    let btn = e.target;
    if(btn.innerHTML.match(/[+,*,/,-]/)) {
        sign = btn.innerHTML
    }
    res.innerHTML += btn.innerHTML;
    console.log(sign);
}

function clear(){
    res.innerHTML = "";
}
function parse() {
    let ques = res.innerHTML.split(/[/,*,-,+]/);
    ques=ques.map(x=> parseInt(x, 2))
    return ques
}
function solution(){
   
    ques = parse();
    console.log(ques);
    let value = eval(ques[0]+sign+ques[1]);
    value = Math.floor(value);
    res.innerHTML = value.toString(2)
}
