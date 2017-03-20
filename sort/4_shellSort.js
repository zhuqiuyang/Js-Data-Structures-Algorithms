// insertSort combine gaps
// STEPS:
// 1. iterate gaps arr
// 2. do insertSort to Arr with gap
// 3. last gap is 1

function shellSort(arr, gaps) {
  for (gap of gaps) {
    // every elemnt is a Insert Sort
    for (out = gap; out < arr.length; ++out) {
      let inner = out
      let temp = arr[out]
      // inner is the placed wait for insert
      // ensure inner >= gap; index can reach 0 at least
      while (inner >= gap && arr[inner - gap] >= temp) {
        arr[inner] = arr[inner - gap]
        inner -= gap
      }
      arr[inner] = temp
    }
  }
  return arr
}

console.log(shellSort([1, 5, 6, 3, 8, 2, 9, 4, 0], [5, 3, 1]))