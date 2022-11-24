const problemList = [
  'Problem: Questions are hard to formulate if you lack context',
  "Problem: 3D printers aren't connective",
  'Problem: cosmetic product ingredients are opaque',
  "Problem: You can't draw on a recording in the same way you do a screenshot",
  'Problem: Inputting to Trello is slow on the iPhone',
  "Problem: Developers mostly work with other people's code",
  'Problem: most students learn to code with wifi',
  'Problem: cloud services promote the false idea you don’t need backups',
  'Problem: useful metrics are static and require visiting a website often',
  'Problem: manufacturing lines are single purpose',
];

const listOfPairs = [];

const generatePairs = (listsPairs) => {
  if (listsPairs.length <= 1) {
    return listOfPairs;
  }

  for (let i = 1; i < listsPairs.length; i++) {
    listOfPairs.push([listsPairs[0], listsPairs[i]]);
  }

  return generatePairs(listsPairs.splice(1));
};

console.log('result: ', generatePairs(problemList));
