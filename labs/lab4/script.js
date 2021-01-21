window.onload = () => {
    let block = document.querySelector(".block")
    let body = document.querySelector("body")

    let sdvig = 20;
    function move(){
        if (sdvig % 1920 != 0){
            block.style.left = sdvig+'px';
            block.style.top = Math.pow(sdvig, 0.75) - 15 + "px";
            sdvig += 40;
            console.log(sdvig)
            setTimeout(move,250);
        }
    }

    block.onclick = (e) =>{
        block.style.left = "20px";
        block.style.top = "330px";

        move();

    }
}