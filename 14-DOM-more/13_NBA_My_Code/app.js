const warriorsGames = [{
	awayTeam: {
		team: 'Golden State',
		points: 119,
		isWinner: true
	},
	homeTeam: {
		team: 'Houston',
		points: 106,
		isWinner: false
	}
},
{
	awayTeam: {
		team: 'Golden State',
		points: 105,
		isWinner: false
	},
	homeTeam: {
		team: 'Houston',
		points: 127,
		isWinner: true
	}
},
{
	homeTeam: {
		team: 'Golden State',
		points: 126,
		isWinner: true
	},
	awayTeam: {
		team: 'Houston',
		points: 85,
		isWinner: false
	}
},
{
	homeTeam: {
		team: 'Golden State',
		points: 92,
		isWinner: false
	},
	awayTeam: {
		team: 'Houston',
		points: 95,
		isWinner: true
	}
},
{
	awayTeam: {
		team: 'Golden State',
		points: 94,
		isWinner: false
	},
	homeTeam: {
		team: 'Houston',
		points: 98,
		isWinner: true
	}
},
{
	homeTeam: {
		team: 'Golden State',
		points: 115,
		isWinner: true
	},
	awayTeam: {
		team: 'Houston',
		points: 86,
		isWinner: false
	}
},
{
	awayTeam: {
		team: 'Golden State',
		points: 101,
		isWinner: true
	},
	homeTeam: {
		team: 'Houston',
		points: 92,
		isWinner: false
	}
}
];

const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ul');
	const target = document.createElement('h2');
	target.innerText = targetTeam;
	target.classList.add('target-team');

	for (let game of warriorsGames) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game)


		// check if our team won or lost, and add that class to it
		gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');

		ulParent.append(gameLi);
		ulParent.prepend(target);
	}

	return ulParent;
}

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	// find if out target team is home or away
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;

	// return isWinner set to true/false;
	return target.isWinner;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
	// unpack the teams directly as a parameter

	// inner object destructuring
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;

	// strings
	const teamNames = `${aTeam} @ ${hTeam} : `;
	let scoreLine;

	// add bold tag to higher score
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
	} else {
		scoreLine = `${aPoints} - <b>${hPoints}</$>`;
	}

	return `${teamNames} ${scoreLine}`;
}


const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');

const chart1 = makeChart(warriorsGames, 'Golden State');
const chart2 = makeChart(warriorsGames, 'Houston');

gsSection.append(chart1);
hrSection.append(chart2);

