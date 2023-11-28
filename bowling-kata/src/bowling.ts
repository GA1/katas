export const bowling = (frames: string[]): number => {
  let score = 0
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i]
    let framePoints: number
    let roll1: number
    let roll2: number

    if (frame[1] === '/') {
      score += 10 + Number(frames[i + 1][0])
      continue
    }

    if (frame[0] === '-') {
      roll1 = 0
    } else {
      roll1 = Number(frame[0])
    }
    if (frame[1] === '-') {
      roll2 = 0
    } else {
      roll2 = Number(frame[1])
    }
    framePoints = roll1 + roll2
    score += framePoints
  }
  return score
}
