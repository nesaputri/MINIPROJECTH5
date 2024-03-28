const generateWinner = () => {
  const matchList = [["mu", "city"], ["munchen", "mu"], ["city", "munchen"]];
  const scores = {
    mu: 0,
    city: 0,
    munchen: 0,
  };

  for (let i = 0; i < matchList.length; i++) {
    const [home, away] = matchList[i];
    if (home > away) scores[home] += 3;
    else if (home < away) scores[away] += 3;
    else {
      scores[home] += 1;
      scores[away] += 1;
    }
  }

  const results = Object.values(scores);
  const winningScore = Math.max(...results);
  return Object.keys(scores).filter(team => scores[team] === winningScore)[0];
}

const winner = generateWinner();
console.log(winner);