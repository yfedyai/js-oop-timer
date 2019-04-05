const container = document.querySelector('#container');



class Timer  {
    constructor(seconds){
        if (seconds <= 0 || typeof seconds != 'number') return alert('invalid input') ;
        this.seconds = seconds;
        this.secondsLeft = this.seconds;
        this.render();
        
        
          
 
    }

    timerStart() {      
        this.contdown = setInterval(() => {
            if (this.secondsLeft > 0) {
                
                this.secondsLeft-=1;  
            }    
            else {
                clearInterval(this.contdown);
                this.backToDefault();
                
            } 
        const currentWidth = this.progressBar.offsetWidth;       
        const step = Math.round(this.width/(this.seconds)); 
        this.displayTimeLeft(this.secondsLeft);
        
        this.progressBar.style.width = (currentWidth - step) >= 0 ? `${currentWidth - step}px` : `${0}px`;
        },1000);
    }

    timerStop() {
        clearInterval(this.contdown);
    }

    displayTimeLeft(timeLeft){
        this.minutes = Math.floor(timeLeft / 60);
        this.remaindSeconds = timeLeft % 60;
        this.blockTimer.innerText = `${this.minutes}:${this.remaindSeconds < 10 ? '0' : ''}${this.remaindSeconds}`;
    }

    createProgressBar() {
        this.progressBar = document.createElement("div");
        this.progressBar.classList.add("progress-bar");
        return this.progressBar;

    }


    render() {
        container.classList.add("wrapper");
        this.blockTimer = document.createElement("div");
        this.blockTimer.classList.add("timer-block");
        container.append(this.blockTimer);
        this.button = document.createElement("button");
        this.button.classList.add("start-stop-button");
        this.button.textContent = "Start";
        container.append(this.button);
        
        container.append(this.createProgressBar());
        this.width = this.progressBar.offsetWidth;
        console.log(' this.progressBar.style.width;: ',  this.progressBar);
        
        this.displayTimeLeft(this.seconds);
        this.button.addEventListener("click", this.checkClick.bind(this))
        
        
    }



    


    checkClick() {
        if (this.button.textContent === "Start" ) {
            this.button.textContent = "Stop";
            this.timerStart();
        }

        else{
            this.button.textContent = "Start";
            this.timerStop();
        }
    }
    

    backToDefault() {
        this.button.textContent = "Start";
        this.secondsLeft = this.seconds;
        this.progressBar.style.width = `${100}%`;
        this.displayTimeLeft(this.seconds);
        
    }
}



timer = new Timer(5);