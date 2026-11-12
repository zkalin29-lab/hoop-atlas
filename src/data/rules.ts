import { S, type Src } from './sources';
export type Rule = { name: string; kind: 'Violation' | 'Foul'; what: string; signal: string; src: Src[]; verify?: boolean };
export const rules: Rule[] = [
  { name: 'Travelling', kind: 'Violation', what: 'A player holding the ball moves a foot illegally: lifting the pivot foot before the ball is released, or taking more steps than the rules allow after gathering (two in both codes).', signal: 'Rotate both fists around each other in front of the chest.', src: [S.travel, S.fiba, S.nba] },
  { name: 'Double dribble', kind: 'Violation', what: 'Dribbling again after the dribble has ended, or dribbling with both hands at the same time.', signal: 'Pat the air with both palms facing down, one hand after the other.', src: [S.dribble, S.fiba, S.nba] },
  { name: 'Carrying', kind: 'Violation', what: 'The dribbling hand slips underneath or to the side of the ball and rests there before pushing on.', signal: 'Turn one hand palm-up in a half circle.', src: [S.viol, S.fiba] },
  { name: 'Three seconds', kind: 'Violation', what: 'An attacker stays in the paint for more than three seconds while his team controls the ball in the frontcourt.', signal: 'Extend an arm with three fingers showing.', src: [S.viol, S.fiba, S.nba] },
  { name: 'Five seconds', kind: 'Violation', what: 'A closely guarded player holds the ball for five seconds, or a throw-in takes longer than five seconds.', signal: 'Show five fingers.', src: [S.viol, S.fiba] },
  { name: 'Eight seconds', kind: 'Violation', what: 'A team fails to bring the ball over the halfway line within eight seconds of gaining control in its backcourt.', signal: 'Show eight fingers.', src: [S.viol, S.fiba, S.nba] },
  { name: 'Shot clock', kind: 'Violation', what: 'A team does not get a shot to the rim inside 24 seconds of gaining control.', signal: 'Touch the shoulder with the fingers (FIBA chart). The NBA gesture may differ.', src: [S.clock, S.fiba, S.nba], verify: true },
  { name: 'Backcourt', kind: 'Violation', what: 'Once the attack has taken the ball into the frontcourt it may not play it back over the halfway line.', signal: 'Sweep an arm back toward the backcourt.', src: [S.viol, S.fiba, S.nba], verify: true },
  { name: 'Out of bounds', kind: 'Violation', what: 'The ball, or the player holding it, touches the boundary line or anything beyond it.', signal: 'Point along the court toward the team that gets the throw-in.', src: [S.viol, S.fiba] },
  { name: 'Holding', kind: 'Foul', what: 'Gripping an opponent so that his freedom of movement is restricted.', signal: 'Grasp one wrist with the other hand.', src: [S.fiba, S.nba] },
  { name: 'Blocking', kind: 'Foul', what: 'Illegal contact that slows an opponent who is not in the defender’s legal path.', signal: 'Place both hands on the hips.', src: [S.fiba, S.nba] },
  { name: 'Pushing', kind: 'Foul', what: 'Forcing an opponent off his spot by shoving with the hands or body.', signal: 'Push both arms forward as if shoving.', src: [S.fiba, S.nba] },
];
