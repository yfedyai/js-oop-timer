class TimerChecker extends Timer {
    constructor(seconds, checker) {
        if (typeof checker != "boolean") throw new Error("second parameter must me boolean");
        super(seconds);
        this.checker = checker;
        this.checkTimerStatus();

    }

    checkTimerStatus() {
        if (this.checker && this.checker == true) {
            this.button.textContent = "Start";
            this.checkClick();
        }
        else {
            this.button.textContent = "Stop";
            this.checkClick();
        }

    }


}

new TimerChecker(10000, true);