// https://timer69.vercel.app

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },

    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },

    onComplete() {
        console.log('Timer completed ✅');
        console.log();
    }

});


// 1193.8 * 6 / 6 - 1193.8 = 0
// 1193.8 * 3 / 6 - 1193.8 = -596.9
// 1193.8 * .05 / 6 - 1193.8 = -1183.85
// 1193.8 * 0 / 6 - 1193.8 = -1193.8
