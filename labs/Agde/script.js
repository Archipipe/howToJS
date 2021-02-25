let ip = "mine.fulldroper.tk"
let port = "1338"
let ws = new WebSocket(`ws://${ip}:${port}`)
const body = document.querySelector("body")

const reg = document.querySelector("#reg")
const regLog = document.querySelector("#login1")
const regPas = document.querySelector("#password1")
const log = document.querySelector("#log")

const soob = document.querySelector("#vvesti")
const send = document.querySelector("#send")

const chat = document.querySelector("#chat")
const get = document.querySelector("#get")

const inputPhoto = document.querySelector('#photo')
const kartinka = document.querySelector('#kartinka')

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

ws.onopen = () =>{

    let photo
    let result
    let msg
    let msgJSON
    let tocken
    let messages
    ws.onmessage = x =>{
        result = JSON.parse(x.data)
        console.log(result)  
        if (result.tocken !== undefined) tocken = result.tocken;

        if (result.chat !== undefined){
            for(let i = 0; i < result.chat.length; i++) {
                messages += `<p>${result.chat[i].img !== undefined ? `<img src= ${result.chat[i].img} width="30px" height="30px">` : ""}  <a>${result.chat[i].n} : </a>  ${result.chat[i].text} </p>`
            }

            chat.innerHTML = messages
        }
    }

    reg.onclick = (e) =>{
        msg = {"cmd" : "register", "username" : `${regLog.value}`, "password" : `${regPas.value}`}
        msgJSON = JSON.stringify(msg)
        ws.send(msgJSON)
    }
    
    log.onclick = (e) =>{
        msg = {"cmd" : "login", "username" : `${regLog.value}`, "password" : `${regPas.value}`}
        msgJSON = JSON.stringify(msg)
        ws.send(msgJSON)
    }

    send.onclick = (e) =>{
        msg = {"cmd" : "sendmsg", "tocken" : `${tocken}`, "value" : `${soob.value}`}
        msgJSON = JSON.stringify(msg)
        ws.send(msgJSON)
        soob.value = ""
    }

    getchat = () =>{
        messages =""
        msg = {"cmd" : "getchat", "tocken" : `${tocken}`}
        msgJSON = JSON.stringify(msg)
        ws.send(msgJSON)
    }
    tocken !==undefined && setInterval(getchat, 500)

    //photo = toBase64(kartinka.src)
    inputPhoto.onchange = () =>{
        kartinka.src = window.URL.createObjectURL(inputPhoto.files[0])
        photo = toBase64(inputPhoto.files[0])
    }

}
 
