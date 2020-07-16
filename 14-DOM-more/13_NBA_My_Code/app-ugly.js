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

const ulParent = document.createElement('ul');
// document.body.append(ulParent);

for (let game of warriorsGames) {
	// main object destructuring
	const { homeTeam, awayTeam } = game;

	const gameLi = document.createElement('li');

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


	// our team are Golden State Warriors
	const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;


	gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');

	gameLi.innerHTML = `${teamNames} ${scoreLine}`;

	ulParent.append(gameLi);

}

// to put it before our script
document.body.prepend(ulParent);