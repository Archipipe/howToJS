window.onload=()=>{
    const input = document.querySelector("#newUser");
    const addU = document.querySelector("#getUser");
    const output = document.querySelector("#output")
    const res = document.querySelector("#outputText")
    const admRes = document.querySelector("#admOuput")
    let keys = [];
    const _id_ = 'db'
    const getCookie = name => {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    const addUser = () => {
        const type = document.querySelector('input[name="option1"]:checked').value
        const lvl = document.querySelector('input[name="option2"]:checked').value
        const x = JSON.parse(getCookie(_id_))
        type == 1?x.male++:x.female++;
        lvl == 1?x.edu[0]++:lvl==2?x.edu[1]++:x.edu[2]++;
        document.cookie=`${_id_}=${JSON.stringify(x)}`
    }
    getCookie(_id_) || (document.cookie=`${_id_}=${JSON.stringify({male:0,female:0,edu:[0,0,0]})}`)
    addU.onclick=()=>addUser();
    output.onclick=()=>{
        const x = JSON.parse(getCookie(_id_))
        x.users = x.female+x.male
        res.innerHTML = `
        1. % женщин : ${(x.female*100)/x.users}% <br>
        2. % мужчин : ${(x.male*100)/x.users}% <br> 
        3. % высш. обр. : ${(x.edu[0]*100)/x.users}% <br> 
        4. % сред. обр. : ${(x.edu[1]*100)/x.users}% <br> 
        5. % нач. обр. : ${(x.edu[2]*100)/x.users}%`
    };
    document.onkeydown = e => {
        keys.push(e.code)
        const x = JSON.parse(getCookie(_id_))
        (keys[0] == "AltLeft" && keys[1] =="KeyA") && (admRes.innerHTML = `Процент мужчин = ${(x.male*100)/(x.female+x.male)}%`);
        (keys[0] != "AltLeft" || keys.length > 3) && (keys=[]);
    }
}