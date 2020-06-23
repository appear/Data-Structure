function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers
  }

  const pibot = numbers[0]
  const left = []
  const right = []

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < pibot) {
      left.push(numbers[i])
    } else {
      right.push(numbers[i])
    }
  }

  return quickSort(left).concat(pibot).concat(quickSort(right))
}

console.log(quickSort([5, 3, 2, 4, 1, 0]))

export default quickSort
