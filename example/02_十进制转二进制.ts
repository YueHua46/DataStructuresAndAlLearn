// 十进制转换为二进制函数

const dec2bin = () => {
  // 不使用toString API实现
  const items: number[] = []
  return function dec2binV(dec: number): number[] {
    console.log('dec', dec)
    if (dec === 1) {
      items.unshift(1)
      return items
    }
    let curRemainder = dec % 2
    let curDec = Math.floor(dec / 2)
    items.unshift(curRemainder)
    return dec2binV(curDec)
  }
}

const dec = 100
const binary = dec2bin()(dec)
console.log(`binary ${binary.join('')}`)
