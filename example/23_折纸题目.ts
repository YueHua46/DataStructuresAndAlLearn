/**
 * 请把纸条竖着放在桌⼦上，然后从纸条的下边向上⽅对折，压出折痕后再展 开。
 * 此时有1条折痕，突起的⽅向指向纸条的背⾯，这条折痕叫做“凹”折痕 ；
 * 突起的⽅向指向纸条正⾯的折痕叫做“凸”折痕。如果每次都从下边向上⽅ 对折，对折N次。
 * 请从上到下计算出所有折痕的⽅向。
 */
// 给定折的次数n,请返回从上到下的折痕的数组，若为下折痕则对应元素为"down"（凹）,若为上折痕则为"up"（凸）.


// 对于这个题目，实际其左子树永远都是凹，右子树永远都是凸。

/**
 * 
 * 实现思路：
 *  1.定义一个主函数和一个递归线程函数
 *    主函数通过传递折叠的次数来决定线程折叠次数
 *    线程函数是实现递归计算折叠
 *  2.线程函数通常需要三个变量：
 *    ①：当前折叠次数
 *    ②：总折叠次数
 *    ③：凹凸面（布尔值，true则为凹，false则为凸）
 */
// 主函数
function printAllFolds(n: number) {
  printProcess(1, n, true)
}

// 递归线程函数
function printProcess(i: number, n: number, isDown: boolean) {
  if (i > n) {
    return null
  }
  // 递归左子树
  printProcess(i + 1, n, true)
  // 左子树递归到头之后从内往外返回打印
  console.log(isDown ? "凹 - " : "凸 - ")
  // 递归右子树
  printProcess(i + 1, n, false)
}

printAllFolds(2)