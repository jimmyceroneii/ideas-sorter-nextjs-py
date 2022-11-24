// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}

export const problemList = [
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

export const formattedList = [
  [
    'Problem: Questions are hard to formulate if you lack context',
    "Problem: 3D printers aren't connective"
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    'Problem: cosmetic product ingredients are opaque'
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    "Problem: You can't draw on a recording in the same way you do a screenshot"
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    'Problem: Inputting to Trello is slow on the iPhone'
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    "Problem: Developers mostly work with other people's code"
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    'Problem: most students learn to code with wifi'
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    'Problem: Questions are hard to formulate if you lack context',
    'Problem: manufacturing lines are single purpose'
  ],
  [
    "Problem: 3D printers aren't connective",
    'Problem: cosmetic product ingredients are opaque'
  ],
  [
    "Problem: 3D printers aren't connective",
    "Problem: You can't draw on a recording in the same way you do a screenshot"
  ],
  [
    "Problem: 3D printers aren't connective",
    'Problem: Inputting to Trello is slow on the iPhone'
  ],
  [
    "Problem: 3D printers aren't connective",
    "Problem: Developers mostly work with other people's code"
  ],
  [
    "Problem: 3D printers aren't connective",
    'Problem: most students learn to code with wifi'
  ],
  [
    "Problem: 3D printers aren't connective",
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    "Problem: 3D printers aren't connective",
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    "Problem: 3D printers aren't connective",
    'Problem: manufacturing lines are single purpose'
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    "Problem: You can't draw on a recording in the same way you do a screenshot"
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    'Problem: Inputting to Trello is slow on the iPhone'
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    "Problem: Developers mostly work with other people's code"
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    'Problem: most students learn to code with wifi'
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    'Problem: cosmetic product ingredients are opaque',
    'Problem: manufacturing lines are single purpose'
  ],
  [
    "Problem: You can't draw on a recording in the same way you do a screenshot",
    'Problem: Inputting to Trello is slow on the iPhone'
  ],
  [
    "Problem: You can't draw on a recording in the same way you do a screenshot",
    "Problem: Developers mostly work with other people's code"
  ],
  [
    "Problem: You can't draw on a recording in the same way you do a screenshot",
    'Problem: most students learn to code with wifi'
  ],
  [
    "Problem: You can't draw on a recording in the same way you do a screenshot",
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    "Problem: You can't draw on a recording in the same way you do a screenshot",
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    "Problem: You can't draw on a recording in the same way you do a screenshot",
    'Problem: manufacturing lines are single purpose'
  ],
  [
    'Problem: Inputting to Trello is slow on the iPhone',
    "Problem: Developers mostly work with other people's code"
  ],
  [
    'Problem: Inputting to Trello is slow on the iPhone',
    'Problem: most students learn to code with wifi'
  ],
  [
    'Problem: Inputting to Trello is slow on the iPhone',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: Inputting to Trello is slow on the iPhone',
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    'Problem: Inputting to Trello is slow on the iPhone',
    'Problem: manufacturing lines are single purpose'
  ],
  [
    "Problem: Developers mostly work with other people's code",
    'Problem: most students learn to code with wifi'
  ],
  [
    "Problem: Developers mostly work with other people's code",
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    "Problem: Developers mostly work with other people's code",
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    "Problem: Developers mostly work with other people's code",
    'Problem: manufacturing lines are single purpose'
  ],
  [
    'Problem: most students learn to code with wifi',
    'Problem: cloud services promote the false idea you don’t need backups'
  ],
  [
    'Problem: most students learn to code with wifi',
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    'Problem: most students learn to code with wifi',
    'Problem: manufacturing lines are single purpose'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: useful metrics are static and require visiting a website often'
  ],
  [
    'Problem: cloud services promote the false idea you don’t need backups',
    'Problem: manufacturing lines are single purpose'
  ],
  [
    'Problem: useful metrics are static and require visiting a website often',
    'Problem: manufacturing lines are single purpose'
  ]
]