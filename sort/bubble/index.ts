/**
 *  버블 정렬: 인접한 데이터를 비교해서, 자리를 바꾸며 정렬하는 알고리즘
 */

export default function bubbleSort(numbers: number[]) {
  const array = [...numbers]

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }

  return array
}
