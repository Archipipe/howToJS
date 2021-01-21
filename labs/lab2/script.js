window.onload = () =>{
    let a = 0;
    let b = 0;
    let assoc = new Map();
    let mass = [3, 3.2, 'этат', 'дом', 14, 'запривачен', -4, 'гнида', 8.6, 'блядь'];
    //console.log(typeof mass) //------Нихуя не понял что там делать с джойном небаным блдять пиздаце сука ааааааааааааааааааааааааааа
    //mass.forEach(element => console.log(element));
    for (let i =0; i<mass.length; i++){
        if (typeof mass[i] == "number"){
            a += mass[i];
            b += 1
        }

        assoc.set(`${i}`, `${mass[i]}`)
    }
    
    console.log(parseFloat(a.toFixed(1))/b)
    let minkey ="0"
    for (let key of assoc.keys()){
        if (key < minkey){
            minkey = key
        }
    }

    itog = []

    itog.push(mass,assoc)
    console.log(minkey)
    console.log(assoc)
    console.log(itog)
    console.log(navigator.userAgent)


 }