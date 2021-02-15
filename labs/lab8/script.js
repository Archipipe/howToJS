window.onload = () => {
    let vvod = document.querySelector("#vvod_btn")
    let facandgr = document.querySelector(".vv_facandgr")
    let name = document.querySelector(".vv_name")
    let zk = document.querySelector(".vv_zk")
    let viv_facandgr = document.querySelector(".facandgr")
    let viv_name = document.querySelector(".name")
    let viv_zk = document.querySelector(".zk")
    let troubles = document.querySelector('.oshibki')

    vvod.onclick = () => {
        text = facandgr.value.split(" ")
        viv_facandgr.innerHTML = `Группа : ${text[0]} <br> Факультет : ${text[1]}`

        viv_name.innerHTML = `ФИО : ${name.value}`;
        
        text = zk.value.split(" ")
        viv_zk.innerHTML = `ЗК : ${text[0]}`

        re1 = /^[Группа]{1,}\ \:\ [А-я]{1,}\ [<br>]{1,}\ [Факультет]{1,}\ \:\ [А-я]{1,}$/gmi
        re2 = /^[ФИО]{3}\ \:\ [А-я]{1,}\.[А-Я]{1}\.[А-Я]{1}$/gm
        result2 = re2.exec(viv_name.innerHTML)
        re3 = new RegExp("^[ЗК]{2}\ \:\ [0-9]{1,}","gm")
        result3 = re3.exec(viv_zk.innerHTML)
        re4 = /\+[0-9]{11}/gm
        result4 =re4.exec(text[1])


        if (viv_facandgr.innerHTML.match(re1) == null){
            troubles.innerHTML = "Проверьте корректность написания вашего факультета и группы"
        } else if (result2 == null){
            troubles.innerHTML = "Проверьте корректность написания вашего ФИО"
        } else if (result3 == null) {
            troubles.innerHTML = "Проверьте корректность написания вашей записной книжки"
        } else if (result4 == null) {
            troubles.innerHTML = "Проверьте корректность написания вашего номера"
        } else {
            troubles.innerHTML = "Вроде ок"
        }
    };    
}