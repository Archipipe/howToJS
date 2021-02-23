let ip = "mine.fulldroper.tk"
let port = "1336"
let ws = new WebSocket(`ws://${ip}:${port}`)
const pos = document.querySelector("#pol")
const otpr = document.querySelector("#otpr")
const vstep = document.querySelector("#vstep")
const inut = document.querySelector("#inut")
const sver = document.querySelector("#sver")

ws.onopen = () =>{

    let i = 1200 ;
    ws.onmessage = x =>{
        let JSONparse = JSON.parse(x.data)
         if (JSONparse.flag !== undefined){
             clearInterval(inter)
             console.log(JSONparse)
             console.log(i-1)
        }
    }

    pol.onclick = () => ws.send(JSON.stringify({"cmd":"getnum"}))

    vstep.onclick = () => inut.value = inut.value**3

    sver.onclick = () => {
        if(inut.value == asa){
            console.log("da")
        }
    }

    let msg = {"cmd":"getnum"}
    ws.send(JSON.stringify(msg))






    let inter = setInterval(() => {
        ws.send(JSON.stringify({"cmd":"setnum", "num": `${i}`}))
        i++
        if (i >= 10000){
            clearInterval(inter)
        }

        sver.onclick = () => {
            clearInterval(inter)
        }
    },100)




}
