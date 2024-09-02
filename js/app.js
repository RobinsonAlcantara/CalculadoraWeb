const pantalla=document.querySelector(".pantalla");
const n1 =document.querySelector("[value='1']");
const n2 =document.querySelector("[value='2']");
const n3 =document.querySelector("[value='3']");
const n4 =document.querySelector("[value='4']");
const n5 =document.querySelector("[value='5']");
const n6 =document.querySelector("[value='6']");
const n7 =document.querySelector("[value='7']");
const n8 =document.querySelector("[value='8']");
const n9 =document.querySelector("[value='9']");
const n0 =document.querySelector("[value='0']");
const mas =document.querySelector("[value='+']");
const menos =document.querySelector("[value='-']");
const mult =document.querySelector("[value='*']");
const div =document.querySelector("[value='/']");
const igual =document.querySelector("[value='=']");
const borrar =document.querySelector("[value='C']");


//Event Listener
n1.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n2.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n3.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n4.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n5.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n6.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n7.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n8.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n9.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
n0.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
mas.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
menos.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
mult.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
div.addEventListener("click",(e)=>{
    if(pantalla.textContent==="0"){
        pantalla.textContent=e.target.value;
    }else{
        pantalla.textContent+=e.target.value;
    }
    
})
igual.addEventListener("click",(e)=>{
    
   pantalla.textContent=eval(pantalla.textContent);
    
})
borrar.addEventListener("click",()=>{
    pantalla.textContent=0;   
    
})