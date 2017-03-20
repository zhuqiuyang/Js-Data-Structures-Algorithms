function insertSort(arr) {
  for (let out = 1; out < arr.length; out++) {
    // temp is the new element need to be inserted
    let temp = arr[out]
    let inner = out
    // compare with temp
    while (inner> 0 && arr[inner - 1] > temp) {
      arr[inner] = arr[inner-1]
      inner--
    }
    // temp only inserted once
    arr[inner] = temp
  }
  return arr
}

console.log(insertSort([9,0,5,8,4,1,2,7,8,4]))