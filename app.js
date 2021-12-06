<audio controls="controls" loop="loop" > 
    <source src="Rainbow Six Siege OK (Instrumental).mp3" type="audio/mpeg" />
</audio>

const timeH = document.querySelector('h1');
let timeSecond = 50;
if (timeleft < 25) {
    greeting = "Warning Less than ½ way to launch, time left = insert variable here"
}

 scanner1 = new Scanner( System.in );

        //input first name
         System.out.print("Enter your first name: ");
         firstName = scanner1.nextLine();

         System.out.print("Enter your last name: ");
         lastName = scanner1.nextLine();

        //output last name
         System.out.print("Your first name is " + firstName + " and your last name is "+ lastName);


displayTime(timeSecond)

<input type="button" onclick="seconds=60;" value="Reset" />

var reset = document.getElementById('reset');
reset.onclick = function() {
    seconds = 60;
    clearInterval(interval);
    interval = null;
}


var start = document.getElementById('Start');
start.onclick = function() {
    if (!interval) {
        countdown('countDown');
    }
}

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
    /new 
}