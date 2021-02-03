window.onload = () =>{
    let photoCounter = 0
    const inputPhoto = document.querySelector(".photo")
    const inputText = document.querySelector(".text")
    const imgs = document.querySelector(".images__output")
    const texts = document.querySelector(".texts")

    inputPhoto.onchange = () =>{
        photoCounter++

        if (photoCounter<3){
            const elImg = document.createElement("img")
            elImg.src = window.URL.createObjectURL(inputPhoto.files[0])
            elImg.style.width = `${200}px`
            elImg.style.height = `${200}px`
            imgs.appendChild(elImg)
        } else {
            alert("Пососи")
        }
    }

    inputText.onchange = () =>{
        let file = inputText.files[0]
        let reader = new FileReader()
        isHTML = /\.[html]{4}/gm
        isTXT = /\.[txt]{3}/gm

        reader.readAsText(file)

        if (file.name.match(isTXT) != null){
            reader.onload = function() {
                result = reader.result
                console.log(`Кол-во слов : ${result.match(/\S+/g).length}`)
                console.log()
            }
        }

        if (file.name.match(isHTML) != null){
            reader.onload = function() {
                console.log(reader.result);
            }
        }
        
    }
}