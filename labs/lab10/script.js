const input = document.querySelector("input")
let apiKey = "7af78391-843c-4e6f-a523-8c2dc052963f"
let invokeURL = "https://api.random.org/json-rpc/2/invoke"
let method = "POST"
let num = 100
let min = 94
let max = 325
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
    let a = res.result.random.data
    let mn = a[0]
    let mx = a[0]
    let sr = 0
    for (let i = 0; i < a.length ; i++){
        if(a[i] < mn) mn = a[i]
        if(a[i] > mx) mx = a[i]
        sr += a[i]
    }
    console.log(mn)
    console.log(mx)
    console.log(sr/a.length)

    input.value += `${mn} ${mx} ${sr/a.length} ${sr}`
})
