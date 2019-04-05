const container = document.querySelector('#container');


const blockTimer = document.createElement("div");
blockTimer.classList.add('timer-block')
container.append(blockTimer);





function timer (seconds) {
    const now  = Date.now()
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
   

 var coundtdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);   
    if (secondsLeft <= 0) {
        clearInterval(coundtdown)
        // return;
    }   
    
    displayTimeLeft(secondsLeft);
 }, 1000);

}

function displayTimeLeft(seconds) {
    
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60;
    console.log( {minutes,remainderSeconds});
    blockTimer.innerHTML = `${minutes}:${remainderSeconds < 10 ? '0': '' }${remainderSeconds}`;

    

}
