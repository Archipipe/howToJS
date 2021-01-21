function YaRotEbalEtoyFunkcii(El){
    El.style.backgroundColor ="red"; 
}
window.onload = () =>{
    let body = document.querySelector("body");
    let block = document.querySelector('.block');
    let min2 = document.getElementById("min2")
    let min3 = document.getElementById("min3")


    block.ondblclick = () =>{
        block.style.backgroundColor ="blue"; 
    }

    body.onmouseover = (event)=>{
        if (event.target.className == 'block'){
            block.style.backgroundColor ="red"; 
        }
    };
    

    min2.addEventListener('click', () =>{
        min2.style.backgroundColor ="red"; 
    })

    min3.onclick = ()=>{
        min3.style.backgroundColor ="red";
    }
}
