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
const sendImg =  document.querySelector("#avatar")

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

        if (result.img !== undefined) {
            kartinka.src = result.img
        }

        if (result.chat !== undefined){
            for(let i = 0; i < result.chat.length; i++) {
                messages += `<div class="pdiv">${result.chat[i].img !== undefined ? `<img class="pkar" src= ${result.chat[i].img} width="35 px" height="35px">` : `<a id="fif"></a>`} <div>  <a>${result.chat[i].n} </a> <br> <div id="pa">${result.chat[i].text}</div> </div> </div>`
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

    setInterval(()=> tocken !== undefined && getchat(), 500);

    inputPhoto.onchange = () =>{
        kartinka.src = window.URL.createObjectURL(inputPhoto.files[0])
        toBase64(inputPhoto.files[0])
        .then(res => photo = res)
    }

    sendImg.onclick = () =>{
        msg = {"cmd" : "setimg", "tocken" : `${tocken}`, "img" : `${photo}`}
        msgJSON = JSON.stringify(msg)
        ws.send(msgJSON)
    }

}
 
