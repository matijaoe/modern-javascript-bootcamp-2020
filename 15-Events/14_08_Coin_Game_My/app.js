function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
const scoreboard = document.querySelector('.scoreboard');
const info = document.querySelector('.info');
const easy = document.querySelector('.easy');
const score = scoreboard.children[0];
let scoreCount = 0;
const winMsgs = ['yay you', 'you made it', 'mum must be proud', 'cool cool', 'i wish i was you', 'luckyyyyyyyy', 'we\'re having fun!!!', 'this is so worth it', 'not wasting time at all', 'i didn\'t know it was your sister!', 'and then what :-)))', 'WHOA', 'i dont like cash anyways', 'greedy bitch', 'makin bank', 'mo money mo problem', 'im kind of a gamer myself', 'EPICCCC xDDDDDdd', 'oh no you didn\'t', 'if you were a bag u would be scumbag xd', 'give me job'];

window.addEventListener('keydown', function (e) {
	easy.innerText = ''
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		moveVertical(avatar, 50);
	}
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
		moveVertical(avatar, -50);
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
		moveHorizontal(avatar, 50);
		avatar.style.transform = 'scaleX(1)';
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		moveHorizontal(avatar, -50);
		avatar.style.transform = 'scaleX(-1)';
	} else {
		changeInfo('move with arrowkeys dummy')
	}

	if (isTouching(avatar, coin)) {
		updateScore();
		moveCoin();
		let randomMsg = winMsgs[Math.floor(Math.random() * winMsgs.length)];
		changeInfo(randomMsg);
	}


});

const updateScore = () => {
	scoreCount++;
	score.innerText = scoreCount;
}

const changeInfo = (text) => {
	info.innerText = text;
}


const moveVertical = (element, amount) => {
	const currPos = extractPos(getComputedStyle(element).top);
	element.style.top = `${currPos + amount}px`;
}

const moveHorizontal = (element, amount) => {
	const currPos = extractPos(getComputedStyle(element).left);
	element.style.left = `${currPos + amount}px`;
}

const extractPos = (pos) => {
	let posNum = parseInt(pos.slice(0, -2));
	return posNum <= 0 ? 0 : posNum;
};

const moveCoin = () => {
	const x = Math.floor(Math.random() * (window.innerWidth - 100));
	const y = Math.floor(Math.random() * (window.innerHeight - 100));
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}


moveCoin();