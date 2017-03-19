function selectSort(arr) {
  let len = arr.length


  // Out iterate n-1 times
  while (len--) {
    // suspect temp is big
    let temp = arr[0]
    // inner index from [1, n-1]
    for (let i = 1; i <= len; i++) {
      if (temp > arr[i]) {
        // temp is bigger , keep
        arr[i - 1] = arr[i]
        arr[i] = temp
      } else {
        // arr[i] is bigger
        // positon not change , but temp is arr[i]
        temp = arr[i]
      }
      // console.log(temp)
    }
  }
  return arr
}

console.log(selectSort([9,0,5,8,4,1,2,7,8,4]))