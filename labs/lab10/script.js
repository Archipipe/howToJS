const input = document.querySelector("input")
let apiKey = "7af78391-843c-4e6f-a523-8c2dc052963f"
let invokeURL = "https://api.random.org/json-rpc/2/invoke"
let method = "POST"
let num = 1
let min = 1
let max = 100
let JSONobj = {
    "jsonrpc" : "2.0",
    "method" : "generateIntegers",
    "params" : {"apiKey" : apiKey,"n" : num,"min" : min,"max" : max,"replacement" : true},
    "id" : 1337}

let jsonFile = JSON.stringify(JSONobj)
let obj = {method,headers:{'Content-Type' : 'application/json'}, body : jsonFile}

fetch(invokeURL,obj)
.then(res => res.json())
.then(res => {
    let ras = res.result.random.data[0]
    if(ras % 2 == 0) {
        console.log("мираж")
    } else {
        console.log("инферно")
    }
})
