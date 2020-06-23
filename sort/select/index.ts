/**
 * 선택 정렬
 * 순서대로 값을 뽑는다. 값을 비교하면서 최소값을 맨 앞부터 채워 넣는다.
 */

function selectSort(numbers: number[]) {
  const array = [...numbers]

  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] > array[j]) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }

  return array
}

export default selectSort
