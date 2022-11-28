const sortScores = ({ scores }) => {
  const unsortedScores = [];

  const ideas = Object.keys(scores);

  console.log('ideas: ', ideas);

  for (const idea of ideas) {
    console.log('idea: ', idea);
    unsortedScores.push({ [idea]: scores[idea] });
  }

  return unsortedScores.sort();
}

const scores = {"Problem: Questions are hard to formulate if you lack context":9,"Problem: 3D printers aren't connective":8,"Problem: cosmetic product ingredients are opaque":7,"Problem: You can't draw on a recording in the same way you do a screenshot":6,"Problem: Inputting to Trello is slow on the iPhone":5,"Problem: Developers mostly work with other people's code":4,"Problem: most students learn to code with wifi":3,"Problem: cloud services promote the false idea you don’t need backups":2,"Problem: useful metrics are static and require visiting a website often":1};

console.log('sortedScores: ', sortScores({ scores }));
