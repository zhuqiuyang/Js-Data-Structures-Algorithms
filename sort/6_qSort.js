// STEPS:
// 1. length === 0 ,return ; because catch a pivot
// 2. find pivot
// 3. recursion for left & right

function qSort(arr) {
  if (arr.length === 0) {
    return []
  }
  
  const left = []
  const right = []
  var pivot = arr[0]

  arr.slice(1).forEach((ele) => {
    if (ele < pivot) {
      left.push(ele)
    } else {
      right.push(ele)
    }
  })

  return [].concat(qSort(left), pivot, qSort(right))
}

console.log(qSort([1, 5, 3, 2, 8, 6, 0, 7, 22, 55, 1, 2]))