let counter = 0;
function countUp(){
    counter++;
    document.querySelector('h1').innerHTML = counter;
}
function countDown(){
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('countUp').onclick = countUp
    document.getElementById('countDown').onclick = countDown
});

document.addEventListener('keypress', function(event){
    if(event.key == 'w'){
        countUp()
    } else if(event.key == ('s')){
        countDown()
    }
});