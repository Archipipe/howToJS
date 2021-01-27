window.onload = () =>{
    var time = performance.now();
    let a = -20000
    let y = Math.log((12*2)+Math.sqrt(12))+Math.LN2
    time = performance.now() - time;
    console.log('Время выполнения = ', time)+ 'микросекунд';
}