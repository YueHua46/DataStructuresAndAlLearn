const arr = [41, 33, 17, 80, 61, 5, 55]

// 选择排序
// 时间复杂度为：O(N^2)
function selectionSort(arr: Array<number>) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = min + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    swap(arr, i, min)
  }
}

function swap(arr: Array<number>, i: number, j: number) {
  // 为避免重复的值进行^导致结果为0的情况
  if (arr[i] === arr[j]) return
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

selectionSort(arr)
console.log('arr', arr)

export { selectionSort, swap }
