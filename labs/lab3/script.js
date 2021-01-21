function YaRotEbalEtoyFunkcii(El){
    El.style.backgroundColor ="red"; 
}
window.onload = () =>{
    let body = document.querySelector("body");
    let block = document.querySelector('.block');
    let min2 = document.getElementById("min2")
    let min3 = document.getElementById("min3")
    let ashka = document.querySelectorAll("a")


    block.ondblclick = () =>{
        block.style.backgroundColor ="blue"; 
    }

    // body.onclick = (event)=>{
    //     if (event.target.className == 'block'){
    //         block.style.backgroundColor ="red"; 
    //     }
    // };
    

    min2.addEventListener('mouseover', () =>{
        min2.style.backgroundColor ="red"; 
    })

    min3.oncontextmenu = ()=>{
        min3.style.backgroundColor ="red";
    }

    ashka[0].oncontextmenu = () =>{
        for (let i = 0; i< 3; i++){
            ashka[i].style.backgroundColor ="red"; 
        }
    }

    ashka[1].oncontextmenu = () =>{
        for (let i = 0; i< 3; i++){
            ashka[i].style.backgroundColor ="red"; 
        }
    }

    ashka[2].oncontextmenu = () =>{
        for (let i = 0; i< 3; i++){
            ashka[i].style.backgroundColor ="red"; 
        }
    }


}


