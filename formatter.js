const problemList = [
  'Problem: Video effects are time consuming and challenging for beginners',
  'Problem: Companies are complex systems but compensations attempts to isolate parts',
  'Problem: Attributing code to people is hard',
  "Problem: You can't try out tattoos (zoom and Snapchat filters)",
  'Problem: There is no money all for hiring',
  'Problem: System wide adoption of similar quant reading creates huge risks',
  'Problem: Inward facing enterprise UIs have little incentive to improve',
  'Problem: hand soap uses plastic or is wasteful because it all can’t be used',
  "Problem: You can't work out at the same time your dog does",
  'Problem: E-commerce is static and singleton',
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
