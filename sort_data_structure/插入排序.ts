const arr = [41, 33, 17, 80, 61, 5, 55]

// 插入排序
// 时间复杂度O(N^2) 按最复杂情况设定
// 在上述动图演示中，i相当于是黄色，j相当于是绿色，红色是j+1
function insertionSort(arr: Array<number>) {
  // 1.使用一个循环，从1开始，到尾部
  for (let i = 1; i < arr.length; i++) {
    // 2.另外使用一个内循环，该循环从外循环当前轮回数-1，并持续递减到头部
    // 在每次轮回中时，会判断当前的索引值是否大于其相邻的右索引值，如若是则交换
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }
}
// 交换数组位置的方法
function swap(arr: Array<number>, i: number, j: number) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}
insertionSort(arr)
console.log('arr', arr)

export {}
