window.onload = () => {
    let block = document.querySelector(".block")
    let body = document.querySelector("body")

    let sdvig = 0;
    let topec = 0;
    let num = 1;
    function move(){
        if(sdvig == 1820){
            num *=-1
        }
        if(sdvig == -1){
            num *=-1
        }
        if (num == 1) {
            block.style.top = topec + 'px';
            block.style.left = sdvig + 'px';

            topec = Math.pow(sdvig, 0.75) - 15;
            sdvig += 1;

            console.log(sdvig)
            setTimeout(move,1);

            let tochka = document.createElement('div')
            tochka.classList.add("tochka")
            tochka.style.left = 95 + sdvig + 'px';
            tochka.style.top = 15 + topec + 'px';
            body.appendChild(tochka)
        }

        if (num == -1) {
            block.style.top = topec + 'px';
            block.style.left = sdvig + 'px';

            topec = Math.pow(sdvig, 0.75) - 15;
            sdvig -= 1;
            

            console.log(sdvig)
            setTimeout(move,1);
        }
    }

    block.onmouseout = (e) =>{
        move();
    }
}