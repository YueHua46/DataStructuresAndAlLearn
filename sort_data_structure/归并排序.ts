/**
 * 归并排序实现思路：
 * 1. 给定目标数组arr，找到目标数组的中间位置，将数组一分为二（分为2个数组）
 * 2. 将左右部分数组进行排序，保证左右两部分的数组是有序的
 * 3. 使用外排的方式，比较左右对应位置的元素，将较小的那个放入辅助数组中
 * 4. 使用外排方式最先遍历完的一侧会越界，这时候将另一边的数组直接push进辅助数组中
 * 5. 将辅助数组中的数组拷贝到目标数组中
 */

/**
 * 归并排序的时间复杂度算法：
 * 将样本数据一分为二后采用递归的方式将分割的数组进行排序，总的算法时间复杂度是
 * T(N)=2T(N/2) + O(N)
 * O(N)是最后一步将辅助数组中数据拷贝到目标数组中的算法复杂度
 * 使用递归算法复杂度分析的方式是master公式（符合该公式要求）：T(N) = aT(b*(N/2)) + O(N^d)
 * 所以最后的算法时间复杂度是：N * logN
 */
let arr = [7,6,4,2,1]
mergeSort(arr)
console.log('arr',arr);
function mergeSort(arr:Array<number>) {
  // 数组不存在或长度小于2直接返回
  if(arr === null || arr.length < 2) return

  mergeProcess(arr,0,arr.length - 1)
}
/**
 * @param arr {Array<number>} 需要排序的数组
 * @param L {Number} 需要排序的最左边索引
 * @param R {Number} 需要排序的最右边索引
 */
function mergeProcess(arr:Array<number>,L:number,R:number){
  // 排序终止条件
  if(L >= R) return
  // 获得中间值
  let mid = L + ((R - L) >> 1)
  // let mid:number = Math.trunc((L + R) / 2);
  mergeProcess(arr,L,mid)
  mergeProcess(arr,mid+1,R)
  // 将两个有序的小数组，合并成一个大数组
  merge(arr,L,mid,R)
}
/**
 * 
 * @param arr {Array<number>} 需要排序的数组
 * @param L {Number} 需要排序的最左边索引
 * @param mid {Number} 中间值
 * @param R {Number} 需要排序的最右边索引
 */
function merge(arr:Array<number>,L:number,mid:number,R:number) {
  // 创建辅助函数（其长度为R-L+1）
  // let helpArr = new Array(R-L+1)
  let helpArr:number[] = []
  let i = 0
  let left = L
  let right = mid + 1

  // 将比对左边和右边这两个有序数组每次循环的值谁最小，最小的将会被push到辅助函数后并持续比对
  while(left <= mid && right <= R) {
    // 外排
    // helpArr[i++] = arr[left++] < arr[right++] ? arr[left++] : arr[right++]
    if(arr[left] <= arr[right]){
      helpArr[i++] = arr[left++]
    }else{
      helpArr[i++] = arr[right++]
    }
  }

  // 外排结束
  // 左边没有越界，直接所有数据push到辅助数组后
  while(left <= mid) {
    helpArr[i++] = arr[left++]
  }
  // 右边没有越界，直接所有数据push到辅助数组后
  while(right <= R) {
    helpArr[i++] = arr[right++]
  }

  // 将辅助数组copy到目标数组
  for (let i = 0; i < helpArr.length; i++) {
    arr[L+i] = helpArr[i]
  }
}


