window.onload = () =>{
    let a1 = -1
    let a = []
    kart = document.querySelector('.kartochki')
    sloy1 = document.querySelector('.sloy1')
    sloy2 = document.querySelector('.sloy2')
    sloy3 = document.querySelector('.sloy3')
    help = document.querySelector(".help")
    comm = document.querySelector(".comm")
    body = document.querySelector('body')

    document.onkeydown = (event) =>{
        a.push(event.code)
        if(a[0] == "KeyW" && a[1] == "Digit1"){
            sloy1.style.zIndex = '3'
            sloy2.style.zIndex = '2'
            sloy3.style.zIndex = '1'
            a.length = 0
            
        }

        if(a[0] == "KeyW" && a[1] == "Digit2"){
            sloy1.style.zIndex = '2'
            sloy2.style.zIndex = '3'
            sloy3.style.zIndex = '1'
            a.length = 0
            
        }

        if(a[0] == "KeyW" && a[1] == "Digit3"){
            sloy1.style.zIndex = '1'
            sloy2.style.zIndex = '2'
            sloy3.style.zIndex = '3'
            a.length = 0
            
        }

        if(a[0] == "KeyW" && a[1] == "Digit4"){
            a1 *= -1
            if (a1==-1){
                kart.style.display = "block"
                sloy1.style.display = 'none'
                sloy2.style.display = 'none'
                sloy3.style.display = 'none'
                a.length = 0
            }

            if (a1==1){
                kart.style.display = "none"
                sloy1.style.display = 'block'
                sloy2.style.display = 'block'
                sloy3.style.display = 'block'
                a.length = 0
            }
            
        }

        if (event.shiftKey){
            comm.innerHTML = "Комментарий <br><br><br> Ты когда-нибудь нахуй видел, как выглядят зубы пингвина? Загугли, это пиздец."
            a.length = 0
        }

        if (event.ctrlKey){
            comm.innerHTML = "Комментарий"
            a.length = 0
        }

        if(event.code == "F1"){
            event.preventDefault();
            help.innerHTML = "Короче, если нажмёшь на Shift, ты увидишь комментарий. <br> При комбинации клавиш W+1,2,3 - ты будешь менять местами карточки с Моршу. <br> Там ещё надо, конечно, высвечивать две карточки одновременно, но я не понял, да и похуй, я спать. "
            a.length = 0
        }

        if(a.length == 2 && a[0] != "KeyW"){
            a.length =0
        }  
    }

}