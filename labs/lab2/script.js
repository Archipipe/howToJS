window.onload = () =>{
    let a = 0;
    let b = 0;
    let assoc = new Map();
    let mass = [3, 3.2, 'этат', 'дом', 14, 'запривачен', -4, 'гнида', 8.6, 'блядь'];
    console.log(mass)
    for (let i =0; i<mass.length; i++){
        if (typeof mass[i] == "number"){
            a += mass[i];
            b += 1
        }

    }

    assoc.set("Old", `${mass[2]}`)
    assoc.set("Yee", `${mass[3]}`)
    assoc.set("yee", `${mass[5]}`)
    assoc.set("Ass", `${mass[7]}`)
    assoc.set("Haircut", `${mass[9]}`)
    
    console.log(parseFloat(a.toFixed(1))/b)

    let keysas = []
    for (let key of assoc.keys()){
        keysas.push(key)
    }
    mass = mass.join()

    let itog = []
    itog.push(mass)

    console.log(itog,assoc)
     console.log(keysas.sort()[0])
     console.log(assoc)
     console.log(itog)
     console.log(navigator.userAgent)


 }