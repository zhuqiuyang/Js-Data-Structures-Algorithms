function bubbleSort(arr) {
  let len = arr.length

  do {
    for (let i = 0; i < len - 1; i++)
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
      }
  } while (len--)

  return arr
}



function swap(arr, indexA, indexB) {
  const temp = arr[indexA]
  arr[indexA] = arr[indexB]
  arr[indexB] = temp
}

console.log(bubbleSort([9,0,5,8,4,1,2,7,8,4]))