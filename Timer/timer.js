document.getElementById("startTimer").addEventListener('click', start);
document.getElementById("stopTimer").addEventListener('click', stop);

    var hh = 0;
    var mm=0;
    var ss=0;
    var intervalId=null;

function start(){
    window.intervalId=setInterval(startT, 1000);
}

function startT(){
    
    if(window.ss === 59){
        if(window.mm === 59){
            
            window.hh++;
            window.mm = -1;
        }
        window.mm++;
        window.ss = -1;
    }
    window.ss++;
    document.getElementById('hh').innerHTML = checkTime(window.hh);
    document.getElementById('mm').innerHTML = checkTime(window.mm);
    document.getElementById('ss').innerHTML = checkTime(window.ss);
    
    console.log(window.hh);
    console.log(window.mm);
    console.log(window.ss);
    return window.hh;
    
}

function checkTime(x){
    if(x < 10){
        x = '0' + x;
    };
    return x;
};

function stop(){
    clearInterval(window.intervalId);
}