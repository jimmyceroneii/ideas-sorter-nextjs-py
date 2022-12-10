const problemList = [
  'Problem: tampons are not conveniently stored',
  'Problem: Problem: solar panels are expensive and inconvenient',
  'Problem: Maps apps are free',
  "Problem: You can't vote in app on reality TV shows",
  'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)',
  'Problem: Last mile (and beyond) transport is inefficient and increases traffic',
  'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation',
  "Problem: Public wifi at coffee shops doesn't work",
  'Problem: Hotel block software is confusing',
  "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read.",
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

console.log(generatePairs(problemList));
