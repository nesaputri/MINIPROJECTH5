const generateWinner = () => {

  const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
  ]

  const resultMatch = [0, 1, 0]
  let muPoints = 0;
  let cityPoints = 0;
  let munchenPoints = 0;


  for (let i = 0; i < matchList.length; i++) {
    if (matchList[i][1] === 'mu') {
      if (resultMatch[i] === 1) {
        muPoints += 3;
      }
      else {
        cityPoints += 3;
      }
    }
    if (matchList[i][0] === 'munchen') {
      if (resultMatch[i] === 1) {
        muPoints += 3;
      }
      else {
        munchenPoints += 3;
      }
    }
    if (matchList[i][1] === 'munchen') {
      if (resultMatch[i] === 1) {
        munchenPoints += 3;
      }
      else {
        cityPoints += 3;
      }
    }
  }

  console.log(`${ muPoints } ${ munchenPoints } ${ cityPoints }`)

  if (munchenPoints > Math.max(muPoints, cityPoints)) {
    return 'munchen';
  }
  else return Math.max(muPoints, cityPoints) === muPoints ? 'mu' : 'city';

}

const winner = generateWinner();
console.log(winner)
