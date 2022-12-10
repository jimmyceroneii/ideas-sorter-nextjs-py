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

export const formattedList = [
  [
    'Problem: tampons are not conveniently stored',
    'Problem: Problem: solar panels are expensive and inconvenient'
  ],
  [
    'Problem: tampons are not conveniently stored',
    'Problem: Maps apps are free'
  ],
  [
    'Problem: tampons are not conveniently stored',
    "Problem: You can't vote in app on reality TV shows"
  ],
  [
    'Problem: tampons are not conveniently stored',
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)'
  ],
  [
    'Problem: tampons are not conveniently stored',
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic'
  ],
  [
    'Problem: tampons are not conveniently stored',
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation'
  ],
  [
    'Problem: tampons are not conveniently stored',
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    'Problem: tampons are not conveniently stored',
    'Problem: Hotel block software is confusing'
  ],
  [
    'Problem: tampons are not conveniently stored',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    'Problem: Maps apps are free'
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    "Problem: You can't vote in app on reality TV shows"
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)'
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic'
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation'
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    'Problem: Hotel block software is confusing'
  ],
  [
    'Problem: Problem: solar panels are expensive and inconvenient',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    'Problem: Maps apps are free',
    "Problem: You can't vote in app on reality TV shows"
  ],
  [
    'Problem: Maps apps are free',
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)'
  ],
  [
    'Problem: Maps apps are free',
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic'
  ],
  [
    'Problem: Maps apps are free',
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation'
  ],
  [
    'Problem: Maps apps are free',
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    'Problem: Maps apps are free',
    'Problem: Hotel block software is confusing'
  ],
  [
    'Problem: Maps apps are free',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    "Problem: You can't vote in app on reality TV shows",
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)'
  ],
  [
    "Problem: You can't vote in app on reality TV shows",
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic'
  ],
  [
    "Problem: You can't vote in app on reality TV shows",
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation'
  ],
  [
    "Problem: You can't vote in app on reality TV shows",
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    "Problem: You can't vote in app on reality TV shows",
    'Problem: Hotel block software is confusing'
  ],
  [
    "Problem: You can't vote in app on reality TV shows",
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)',
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic'
  ],
  [
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)',
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation'
  ],
  [
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)',
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)',
    'Problem: Hotel block software is confusing'
  ],
  [
    'Problem: There is no running total when you are grocery shopping (amazon go as a bright spot)',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic',
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation'
  ],
  [
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic',
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic',
    'Problem: Hotel block software is confusing'
  ],
  [
    'Problem: Last mile (and beyond) transport is inefficient and increases traffic',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation',
    "Problem: Public wifi at coffee shops doesn't work"
  ],
  [
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation',
    'Problem: Hotel block software is confusing'
  ],
  [
    'Problem: Employees are forced to go to different companies for different offers based on equity or compenstation',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    "Problem: Public wifi at coffee shops doesn't work",
    'Problem: Hotel block software is confusing'
  ],
  [
    "Problem: Public wifi at coffee shops doesn't work",
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ],
  [
    'Problem: Hotel block software is confusing',
    "Problem: Messages on Android are removed from the notification center if you dismiss the push notification. They are left unread, which means they don't remind you about it like they might if it was read."
  ]
]