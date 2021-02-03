window.onload = () => {
    let facandgr = document.querySelector(".vv_facandgr")
    let name = document.querySelector(".vv_name")
    let zk = document.querySelector(".vv_zk")
    let viv_facandgr = document.querySelector(".facandgr")
    let viv_name = document.querySelector(".name")
    let viv_zk = document.querySelector(".zk")
    let troubles = document.querySelector('.oshibki')
    let re ="sais"

    facandgr.onchange = () => {
        text = facandgr.value.split(" ")
        viv_facandgr.innerHTML = `Группа : ${text[0]} <br> Факультет : ${text[1]}`
        re = /^[Группа]{1,}\ \:\ [А-я]{1,}\ [<br>]{1,}\ [Факультет]{1,}\ \:\ [А-я]{1,}$/gmi
        if (viv_facandgr.innerHTML.match(re) == null){
            troubles.innerHTML = "Долбаёбка, что-то тут не так!"
       } else {
        troubles.innerHTML = "Вроде ок"
       }
    };

    name.onchange = () =>{
        viv_name.innerHTML = `ФИО : ${name.value}`;
        re = /^[ФИО]{3}\ \:\ [А-я]{1,}\.[А-Я]{1}\.[А-Я]{1}$/gm
        result = re.exec(viv_name.innerHTML)
        if (result == null){
            troubles.innerHTML = "Долбаёбка, что-то тут не так!"
        }else {
            troubles.innerHTML = "Вроде ок"
           }
    };

    zk.onchange = () =>{
        text = zk.value.split(" ")
        viv_zk.innerHTML = `ЗК : ${text[0]}`
        re = new RegExp("^[ЗК]{2}\ \:\ [0-9]{1,}","gm")
        result = re.exec(viv_zk.innerHTML)
        if (result == null){
            troubles.innerHTML = "Долбаёбка, что-то тут не так!"
        } else {
            troubles.innerHTML = "Вроде ок"
           }
    };
}