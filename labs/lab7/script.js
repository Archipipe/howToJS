window.onload = () =>{
    let vvod = document.querySelector("#newUser");
    let getUser = document.querySelector("#getUser");
    let output = document.querySelector("#output")
    let result = document.querySelector("#outputText")
    let admResult = document.querySelector("#admOuput")

    let a = 0

    let avrMen = 0

    let spis = []

    let user = {
        "male" : "",
        "education" : ""
    }

    let file ={}

    let showUsers = (a) =>{
        for(let i = 1; i<a+1;i++){
            if(file[`${i}`]["male"] == 1){
                console.log("da")
            }
        }
    }

    vvod.onclick = () =>{
        // ты эбобо?? Нахуй иди у меня тут рубрика эксперементы
        // узерс не существует !!!
        //console.log(users)

        getUser.onclick = () =>{
            let selectedGen = document.querySelector('input[name="option1"]:checked')
            user["male"] = selectedGen.value

            let selectedEd = document.querySelector('input[name="option2"]:checked')
            user["education"] = selectedEd.value

            a+= 1 

            if (a!=6){
                file[a] = user
            } else {
                alert("Слишкам дохуя юзеров иди нахуй крч")
            }


            user = {}
            
            b = 1
            document.cookie = JSON.stringify(file)//не верно чем ты слушал??
            // вот так, потом спрошу по поводу этого!!
            //document.cookie = `nameofelement=${JSON.stringify(file)}`

        }

    }

    output.onclick = () => {
        let users = JSON.parse(document.cookie)// тут тоже ошибка!!
        // возвращает куки с указанным name,
        // или undefined, если ничего не найдено
        // function getCookie(name) {
        //     let matches = document.cookie.match(new RegExp(
        //     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        //     ));
        //     return matches ? decodeURIComponent(matches[1]) : undefined;
        // } 
        // c тебя розяснение кода и доработка ♪ пуш сегодня организуй и закрой эту лабу!!
        let avrWom = 0
        let avrPrim = 0
        let avrMid = 0
        let avrHigh = 0
        for (let i = 1; i<a+1;i++){
            if (users[`${i}`]["male"] == 1 ){
                avrMen++
            } else {
                avrWom++
            }

            if (users[`${i}`]["education"] == 1){
                avrPrim++
            } else if (users[`${i}`]["education"] == 2){
                avrMid++
            } else {
                avrHigh++
            }
        }

        avrMen = (avrMen * 100) / a
        avrWom = (avrWom * 100) / a
        avrPrim = (avrPrim * 100) / a
        avrMid = (avrMid * 100) / a
        avrHigh = (avrHigh * 100) / a
        let result = document.querySelector("#outputText")
        result.innerHTML = `1. % женщин : ${avrWom}% <br> 2. % мужчин : ${avrMen}% <br> 3. % высш. обр. : ${avrHigh}% <br> 4. % сред. обр. : ${avrMid}% <br> 5. % нач. обр. : ${avrPrim}%`
    }



    document.onkeydown = (event) =>{
        spis.push(event.code)

        console.log(spis)
        console.log(spis.length)

        if (spis[0] == "AltLeft" && spis[1] =="KeyA"){
            admResult.innerHTML = `Процент мужчин = ${avrMen}%`
            console.log(avrMen)
        }

        if (spis[0] != "AltLeft" || spis.length > 3){
            spis.length = 0
        }
    }


}