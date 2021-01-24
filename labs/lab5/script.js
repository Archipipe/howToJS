window.onload = () =>{
    let a1 = -1
    let a2 = -1
    let a3 = -1
    let a = []
    sloy1 = document.querySelector('.sloy1')
    sloy2 = document.querySelector('.sloy2')
    sloy3 = document.querySelector('.sloy3')
    help = document.querySelector(".help")
    text = document.querySelector(".text")
    body = document.querySelector('body')

    document.onkeydown = (event) =>{
        a.push(event.code)
        if(a[0] == "KeyW" && a[1] == "Digit1"){
            a1 *= -1
            if (a1 == 1){
                sloy1.style.display = 'none'
                a.length = 0
            }
            
        }

        if(a[0] == "KeyW" && a[1] == "Digit2"){
            a2 *= -1
            if (a1 == 1){
                sloy2.style.display = 'none'
                a.length = 0
            }
            
        }

        if(a[0] == "KeyW" && a[1] == "Digit3"){
            a3 *= -1
            if (a1 == 1){
                sloy3.style.display = 'none'
                a.length = 0
            }
            
        }

        if (event.code =="KeyP"){
            console.log(a)
            a.length = 0
        }
    }

}