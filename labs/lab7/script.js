window.onload = () =>{
    let vvod = document.querySelector("#newUser");
    let getUser = document.querySelector("#getUser");
    let output = document.querySelector("#output")
    let result = document.querySelector("#outputText")
    let a = 0

    let user = {
        "male" : "",
        "education" : ""
    }

    let file ={}

    vvod.onclick = () =>{

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
            

            let JSONFile = JSON.stringify(file)
            document.cookie = JSONFile

        }

    }

    output.onclick


}