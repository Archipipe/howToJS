window.onload = () => {
    let block = document.querySelector(".block")
    let body = document.querySelector("body")

    let sdvig = 0;
    function move(){
        if (sdvig / 1920 == 1){
            sdvig += 40;
            block.style.left = sdvig+'px';
            block.style.top = Math.pow(sdvig, 0.75) - 15 + "px";
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