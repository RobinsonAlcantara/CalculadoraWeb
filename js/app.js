
//Selectores
const pantalla=document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

//Recoore el arreglo de botones
botones.forEach(boton=>{

    boton.addEventListener("click",()=>{
        btnPresionado=boton.value;

        //Si la pantalla tiene menos caracteres sigue el programa
        if(pantalla.textContent.length<10){

            if(btnPresionado==="="){
                try{
                pantalla.textContent=(Math.round(eval(pantalla.textContent)*100)/100);
                }
                catch{
                    pantalla.textContent="Error!"
                }
                return;
            } 

            if(btnPresionado==="C"){
                pantalla.textContent="0";
                return;
            }

            if(btnPresionado==="borrar"){
                if(pantalla.textContent.length===1 || pantalla.textContent==="Error!"){
                    pantalla.textContent="0";
                    
                }else{
                    pantalla.textContent=pantalla.textContent.slice(0, pantalla.textContent.length-1);
                }            
                return;
            }

            if(pantalla.textContent==="0" || pantalla.textContent==="Error!"){
                pantalla.textContent=btnPresionado;
            }else{
                pantalla.textContent+=btnPresionado;
            }

        }else{
            pantalla.textContent="Error!"
        }
    })    

})

