import { S, type Src } from './sources';
export type Pos = { n: number; name: string; short: string; roles: string[]; text: string; src: Src[] };
export const positions: Pos[] = [
  { n: 1, name: 'Point guard', short: 'PG', roles: ['Lead guard', 'Primary ball-handler', 'Floor general'], text: 'Brings the ball up, starts the offence and decides who shoots. Today the job is shared: many teams let a wing or a big man start the play too.', src: [S.pos, S.bbref] },
  { n: 2, name: 'Shooting guard', short: 'SG', roles: ['Scoring guard', 'Off-ball shooter', 'Combo guard'], text: 'The guard who scores more than he organises, often by moving without the ball to get open shots from distance.', src: [S.pos, S.bbref] },
  { n: 3, name: 'Small forward', short: 'SF', roles: ['Wing', '3-and-D wing', 'Point forward'], text: 'The most flexible spot: a scorer, rebounder and defender who can guard several positions. Modern teams prize wings who shoot threes and defend.', src: [S.pos, S.bbref] },
  { n: 4, name: 'Power forward', short: 'PF', roles: ['Stretch four', 'Combo forward', 'Hybrid big'], text: 'Once a strong rebounder who played close to the basket. Now often a forward who also shoots from outside and defends on the perimeter.', src: [S.pos, S.bbref] },
  { n: 5, name: 'Centre', short: 'C', roles: ['Rim protector', 'Roll man', 'Playmaking big', 'Stretch five'], text: 'The tallest player, anchoring the defence near the basket and finishing close to it. The modern centre may also pass from the high post or shoot threes.', src: [S.pos, S.bbref] },
];
