window.onload = () =>{
    sloy1 = document.querySelector('.sloy1')
    sloy2 = document.querySelector('.sloy2')
    sloy3 = document.querySelector('.sloy3')
    help = document.querySelector(".help")
    text = document.querySelector(".text")
    body = document.querySelector('body')

    document.onkeydown = e => {

        if (e.code == "KeyW"){

            document.onkeydown = (e) =>{
                if (e.code == "Digit1"){
                    sloy1.style.display = "none"
                }
                if (e.code == "Digit2"){
                    sloy2.style.display = "none"
                }
                if (e.code == "Digit3"){
                    sloy3.style.display = "none"
                }
            }

            document.onkeyup = (e) =>{
                if (e.code == "Digit1"){
                    sloy1.style.display = "block"
                }
                if (e.code == "Digit2"){
                    sloy2.style.display = "block"
                }
                if (e.code == "Digit3"){
                    sloy3.style.display = "block"
                }
            }
        }
    }

    console.log(2)

}