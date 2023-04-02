// 冒泡排序：
// 基本原理：
// 对于一个无序数组，从左到右将其每个相邻的元素之间进行比较大小，如果比较的左值大于右值，则进行互换

function bubbleSort(arr: Array<number>) {
  let length = arr.length - 1
  // 1.使用一个for循环，从尾部开始持续递减（方便后续锁定排序好的值）
  for (let i = length; i >= 0; i--) {
    // 2.使用另一个for循环，从头部到被锁定的索引位置前，持续递增
    for (let j = 0; j < i; j++) {
      // 3.使用一个变量来保存对比相邻的另一个值
      let m = j + 1
      // 4.比对两个相邻的值是否需要互换
      if (arr[j] > arr[m]) {
        // 5.使用swap方法，通过异或来互换
        swap(arr, j, m)
      }
    }
  }
}

function swap(arr: Array<number>, i: number, j: number) {
  // 为避免重复的值进行^导致结果为0的情况
  if (arr[i] === arr[j]) return
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}
const arr3 = [41, 33, 17, 80, 61, 5, 55]
bubbleSort(arr3)
console.log('arr', arr3)
