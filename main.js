const container = document.querySelector('#container');



class Timer {
    constructor(seconds) {
        if (seconds <= 0 || typeof seconds != 'number') throw new Error('Input must be an integer than higher 0');
        this.seconds = seconds;
        this.secondsLeft = this.seconds;
        this.render();

    }

    timerStart() {

        this.contdown = setInterval(() => {
            if (this.secondsLeft > 0) {
                this.secondsLeft -= 1;
            }
            else {
                clearInterval(this.contdown);
                this.resetTimer();
                this.contdown = null
                return
            }
            this.displayTimeLeft(this.secondsLeft);
            this.decreaseProgessBar();
        }, 1000);
    }

    timerStop() {
        clearInterval(this.contdown);
    }

    decreaseProgessBar() {
        const currentWidth = this.progressBar.offsetWidth;
        const step = Math.round(this.width / (this.seconds));
        this.progressBar.style.width = (currentWidth - step) >= 0 ? `${currentWidth - step}px` : `${0}px`;
    }


    displayTimeLeft(timeLeft) {
        const minutes = Math.floor(timeLeft / 60);
        const remaindSeconds = timeLeft % 60;
        this.blockTimer.innerText = `${minutes}:${remaindSeconds < 10 ? '0' : ''}${remaindSeconds}`;
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
        this.displayTimeLeft(this.seconds);
        this.button.addEventListener("click", this.checkClick.bind(this));
    }

    checkClick() {
        if (this.button.textContent === "Start") {
            this.button.textContent = "Stop";
            this.timerStart();
        }

        else {
            this.button.textContent = "Start";
            this.timerStop();
        }
    }

    resetTimer() {
        this.progressBar.style.width = `${100}%`;
        this.button.textContent = "Start";
        this.secondsLeft = this.seconds;
        this.displayTimeLeft(this.seconds);

    }
}



new Timer(10);




