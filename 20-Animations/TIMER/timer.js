class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.durationInput.addEventListener('focus', () => {
            this.pause();
            this.durationInput.value = '';
        })
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.pauseButton.disabled = true;

        document.addEventListener('keyup', (e) => {
            // ENTER key
            if (e.keyCode === 13) {
                if (!this.startButton.disabled) {
                    this.start();
                } else {
                    this.pause();
                }

            } // TAB KEY
            else if (e.keyCode === 9) {
                this.durationInput.focus()
            }
        });
    }

    start = () => {
        this.startButton.disabled = true;
        this.pauseButton.disabled = false;
        this.durationInput.blur();


        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick(); // so we dont have to wait first itme
        this.interval = setInterval(this.tick, 10); // after every 50ms

    };

    pause = () => {
        clearInterval(this.interval);

        this.startButton.disabled = false;
        this.pauseButton.disabled = true;
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }

        } else {
            //code after = gets passed as an argument to set, which acts as property of this
            this.timeRemaining -= .01; // subtract 50ms every 50ms, so it equals to 1s
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining() {
        let value = parseFloat(this.durationInput.value);
        // if value is not >= 0, put it to default of 10s
        return value >= 0 ? value : 10;
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    };
};

