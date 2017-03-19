function insertSort(arr) {
  for (let out = 1; out < arr.length; out++) {
    // temp is the new element need to be inserted
    let temp = arr[out]
    for (let inner = out; inner > 0; inner--) {
      // compare from out-1, out-2,,,1
      // 1. pre is bigger,then move to post.
      if (arr[inner - 1] > temp) {
        arr[inner] = arr[inner - 1]
        // empty position move pre
        arr[inner - 1] = temp
      }
    }
  }
  return arr
}

console.log(insertSort([9,0,5,8,4,1,2,7,8,4]))