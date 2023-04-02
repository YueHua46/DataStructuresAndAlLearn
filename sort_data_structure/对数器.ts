// 使用对数器，测试选择排序是否正确
// 1.准备算法，我们使用选择排序的算法和官方排序算法来比较选择排序是否正确

// 对数器函数需要接收以下参数：
/**
 * @param frq 需要测试的频率（次数），默认测试100次
 * @param min 测试时，每个arr中值的最小范围，默认-1000000
 * @param max 测试时，每个arr中值的最大范围，默认1000000
 * @param algo1 需要进行测试的算法1
 * @param algo2 需要进行对比的算法2
 * @param arrMax 产生数组时，其最大长度
 */
function arrSortLogarithm(
  algo1: (...args: any[]) => void,
  algo2: (...args: any[]) => void,
  frq = 1000,
  min = -1000000,
  max = 1000000,
  arrMax = 100
) {
  console.time('测试所花费时间')
  // 统计成功与失败次数数组
  const infos: boolean[] = []
  // 根据次数循环不断测试
  for (let j = 0; j < frq; j++) {
    // 每次循环里，创建一个新数组
    const arr1 = new Array(arrMax)
    // 为该数组填满随机数
    for (let i = 0; i < arrMax; i++) {
      arr1[i] = getNumRandom(min, max)
    }
    // copy该数组用作另一个算法去调用
    const arr2 = copyArr(arr1)
    // 算法1调用
    algo1(arr1)
    // 算法2调用
    let algo2SortArr = algo2(arr2)
    // 默认200，表示INFO无误
    let status = 200
    for (let i = 0; i < arr1.length; i++) {
      // 当双方值在当前索引位不一致时，status为400表示ERROR出错
      if (!(arr1[i] === algo2SortArr[i])) {
        status = 400
      }
    }

    // 根据不同状态打印INFO或ERROR提示
    if (status === 200) {
      infos.push(true)
      console.log('\u001b[42;30m INFO \u001b[40;32m Testing OK \u001b[0m')
    } else {
      infos.push(false)
      console.log('\u001b[41;30m INFO \u001b[40;32m Testing Error \u001b[0m')
    }
  }
  // 统计测试相关
  let testingFrq = infos.length
  let isOk = infos.filter((item) => item).length
  let isError = infos.filter((item) => !item).length
  console.log(`
 总计测试次数：${testingFrq}
 测试成功次数：${isOk}
 测试失败次数：${isError}
  `)
  console.timeEnd('测试所花费时间')
}

/**
 * 获取随机数
 * @param min 随机数的最小范围
 * @param max 随机数的最大范围
 * @return 返回一个随机数，范围在min到max之间
 */
function getNumRandom(min: number, max: number) {
  let n1 = parseInt(String(Math.random() * max) + 1)
  let n2 = parseInt(String(Math.random() * min) + 1)
  return n2 + n1
}
// 数组排序官方API
function arraySortFun(arr: any[]) {
  return arr.sort((a, b) => a - b)
}
// 浅拷贝数组
function copyArr(arr: any[]) {
  return arr.map((item) => item)
}
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
// 交换数组位置的方法
function swap(arr: Array<number>, i: number, j: number) {
  // 为避免重复的值进行^导致结果为0的情况
  if (arr[i] === arr[j]) return
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

arrSortLogarithm(selectionSort, arraySortFun)

export {}
