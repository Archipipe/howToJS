window.onload = () =>{
    var time = performance.now();
    let x = 12
    let y = Math.log((x*2)+Math.sqrt(x))+Math.LN2
    time = performance.now() - time;
    console.log('Время выполнения = ', time)+ 'микросекунд';
}