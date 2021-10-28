const timeH = document.querySelector('h1');
let timeSecond = 50;
if (timeleft < 25) {
    greeting = "Warning Less than ½ way to launch, time left = insert variable here"
}
displayTime(timeSecond)

const countDown = setInterval (()=>{
 timeSecond--;
 displayTime(timeSecond) ;
 if(timeSecond <=0 || timeSecond< 1){
     endTime();
     clearInterval(countDown);
 }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
}
function endTime(){
    timeH.innerHTML = 'Lift Off!!'
}