function split(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers
  }

  const middle = Math.ceil(numbers.length / 2)
  const left = numbers.slice(0, middle)
  const right = numbers.slice(middle)

  return merge(split(left), split(right))
}

function merge(left: number[], right: number[]) {
  const mergedList = []
  let leftIdx = 0
  let rightIdx = 0

  while (left.length > leftIdx && right.length > rightIdx) {
    if (left[leftIdx] > right[rightIdx]) {
      mergedList.push(right[rightIdx])
      rightIdx += 1
    } else {
      mergedList.push(left[leftIdx])
      leftIdx += 1
    }
  }

  while (left.length > leftIdx) {
    mergedList.push(left[leftIdx])
    leftIdx += 1
  }

  while (right.length > rightIdx) {
    mergedList.push(right[rightIdx])
    rightIdx += 1
  }

  return mergedList
}

export default split
