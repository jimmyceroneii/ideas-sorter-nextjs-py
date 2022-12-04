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

export const problemList = ['Problem: Video effects are time consuming and challenging for beginners', 'Problem: Companies are complex systems but compensations attempts to isolate parts', 'Problem: Attributing code to people is hard', "Problem: You can't try out tattoos (zoom and Snapchat filters)", 'Problem: There is no money all for hiring', 'Problem: System wide adoption of similar quant reading creates huge risks', 'Problem: Inward facing enterprise UIs have little incentive to improve', 'Problem: hand soap uses plastic or is wasteful because it all can’t be used', "Problem: You can't work out at the same time your dog does", 'Problem: E-commerce is static and singleton'];

export const formattedList = [
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: Companies are complex systems but compensations attempts to isolate parts'
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: Attributing code to people is hard'
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    "Problem: You can't try out tattoos (zoom and Snapchat filters)"
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: There is no money all for hiring'
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: System wide adoption of similar quant reading creates huge risks'
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: Inward facing enterprise UIs have little incentive to improve'
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: Video effects are time consuming and challenging for beginners',
    'Problem: E-commerce is static and singleton'
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    'Problem: Attributing code to people is hard'
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    "Problem: You can't try out tattoos (zoom and Snapchat filters)"
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    'Problem: There is no money all for hiring'
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    'Problem: System wide adoption of similar quant reading creates huge risks'
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    'Problem: Inward facing enterprise UIs have little incentive to improve'
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: Companies are complex systems but compensations attempts to isolate parts',
    'Problem: E-commerce is static and singleton'
  ],
  [
    'Problem: Attributing code to people is hard',
    "Problem: You can't try out tattoos (zoom and Snapchat filters)"
  ],
  [
    'Problem: Attributing code to people is hard',
    'Problem: There is no money all for hiring'
  ],
  [
    'Problem: Attributing code to people is hard',
    'Problem: System wide adoption of similar quant reading creates huge risks'
  ],
  [
    'Problem: Attributing code to people is hard',
    'Problem: Inward facing enterprise UIs have little incentive to improve'
  ],
  [
    'Problem: Attributing code to people is hard',
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    'Problem: Attributing code to people is hard',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: Attributing code to people is hard',
    'Problem: E-commerce is static and singleton'
  ],
  [
    "Problem: You can't try out tattoos (zoom and Snapchat filters)",
    'Problem: There is no money all for hiring'
  ],
  [
    "Problem: You can't try out tattoos (zoom and Snapchat filters)",
    'Problem: System wide adoption of similar quant reading creates huge risks'
  ],
  [
    "Problem: You can't try out tattoos (zoom and Snapchat filters)",
    'Problem: Inward facing enterprise UIs have little incentive to improve'
  ],
  [
    "Problem: You can't try out tattoos (zoom and Snapchat filters)",
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    "Problem: You can't try out tattoos (zoom and Snapchat filters)",
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    "Problem: You can't try out tattoos (zoom and Snapchat filters)",
    'Problem: E-commerce is static and singleton'
  ],
  [
    'Problem: There is no money all for hiring',
    'Problem: System wide adoption of similar quant reading creates huge risks'
  ],
  [
    'Problem: There is no money all for hiring',
    'Problem: Inward facing enterprise UIs have little incentive to improve'
  ],
  [
    'Problem: There is no money all for hiring',
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    'Problem: There is no money all for hiring',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: There is no money all for hiring',
    'Problem: E-commerce is static and singleton'
  ],
  [
    'Problem: System wide adoption of similar quant reading creates huge risks',
    'Problem: Inward facing enterprise UIs have little incentive to improve'
  ],
  [
    'Problem: System wide adoption of similar quant reading creates huge risks',
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    'Problem: System wide adoption of similar quant reading creates huge risks',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: System wide adoption of similar quant reading creates huge risks',
    'Problem: E-commerce is static and singleton'
  ],
  [
    'Problem: Inward facing enterprise UIs have little incentive to improve',
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used'
  ],
  [
    'Problem: Inward facing enterprise UIs have little incentive to improve',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: Inward facing enterprise UIs have little incentive to improve',
    'Problem: E-commerce is static and singleton'
  ],
  [
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used',
    "Problem: You can't work out at the same time your dog does"
  ],
  [
    'Problem: hand soap uses plastic or is wasteful because it all can’t be used',
    'Problem: E-commerce is static and singleton'
  ],
  [
    "Problem: You can't work out at the same time your dog does",
    'Problem: E-commerce is static and singleton'
  ]
]