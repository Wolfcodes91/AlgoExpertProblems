function tournamentWinner(competitions, results) {
  let roundWinner = "";
  let winnerObj;
  let winner = "";
  let winnerArr = [];
  let counter = 0;
  for (let i = 0; i < competitions.length; i++) {
    let awayTeam = competitions[i][1];
    let homeTeam = competitions[i][0];
    if (results[i] === 1) {
      roundWinner = homeTeam;
    }
    if (results[i] === 0) {
      roundWinner = awayTeam;
    }
    winnerArr.push(roundWinner);
  }

  winnerObj = winnerArr.reduce((acc, winner) => {
    acc[winner] = acc[winner] ? acc[winner] + 1 : 1;
    return acc;
  }, {});
  let winnerKeys = Object.keys(winnerObj);
  let winnerVals = Object.values(winnerObj);
  let winnerNum = Math.max(...winnerVals);
  winnerVals.forEach((num, idx) =>
    num === winnerNum ? (winner = winnerKeys[idx]) : num++
  );
  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
