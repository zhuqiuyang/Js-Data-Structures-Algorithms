// STEPS: 
// 1. length = 1 ,return ; because it's sorted
// 2. divided arr to left & right
// 3. recursion for left & right

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const midPoint = Math.round(arr.length / 2)

  return merge(
    // recursion
    mergeSort(arr.slice(0, midPoint)),
    mergeSort(arr.slice(midPoint))
  )
}


// merge two sorted Array
function merge(left, right) {
  const out = []

  while (left.length && right.length) {
    out.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  while (left.length) {
    out.push(left.shift())
  }

  while (right.length) {
    out.push(right.shift())
  }

  return out
}

console.log(mergeSort([9,0,5,8,4,1,2,7,8,4]))