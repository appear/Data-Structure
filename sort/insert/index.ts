/**
 * 삽입정렬
 * 1번째부터 앞으로 가면서 비교하여 정렬한다.
 * 해당 값이 이전 값보다 클 때 값을 변경한다.
 */

function insertSort(numbers: number[]) {
  let array = [...numbers]
  let selectedValue = null

  for (let i = 1; i < array.length; i += 1) {
    selectedValue = array[i]

    for (let j = i; j > 0; j -= 1) {
      if (selectedValue < array[j - 1]) {
        array[j] = array[j - 1]
      } else {
        array[j] = selectedValue

        break
      }
    }
  }

  return array
}

export default insertSort
