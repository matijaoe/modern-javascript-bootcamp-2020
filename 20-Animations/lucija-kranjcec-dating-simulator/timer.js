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

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick(); // so we dont have to wait first second
        this.interval = setInterval(this.tick, 50); // after every 50ms

    };

    pause = () => {
        clearInterval(this.interval)
    };

    onDurationChange = () => {

    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            if (this.onTick) {
                this.onTick();
            }
            // code after = gets passed as an argument to set, which acts as property of this
            this.timeRemaining -= .05; // subtract 50ms every 50ms, so it equals to 1s
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    };
};


// put the line below in the constructor to make it work
// this.startButton.addEventListener('click', this.start.bind(this));
// start() {
//     this.important();
// };