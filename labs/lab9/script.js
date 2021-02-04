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
                console.log(`Кол-во слов : ${result.match(/\w+/gmui).length}`)
                console.log(`Все слова, начинающиеся на b или б : ${result.match(/\b[b|б]\w+\b/gmui).join()}`)
                console.log(`Все слова, имеющие буквы з или b :${result.match(/\b\w*[з|b]\w*\b/gmu).join()}`)
                console.log(`Весь текст заглавными буквами ${result.toUpperCase()}`)
                console.log(`Первые 20 слов текста ${result.match(/^\W*(\w+\s){20}/gmui).join()}`)
                console.log(`/--------------------------------------------------------/`)
            }
        }

        if (file.name.match(isHTML) != null){
            reader.onload = function() {
                console.log(reader.result);
                // console.log(result.match())
                console.log(`/--------------------------------------------------------/`)
            }
        }
        
    }
}