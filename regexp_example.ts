// 1.匹配16进制颜色代码
// const reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})$/i
// const colours = ['#2c3e50','#fff','#0000','#2cc35']
// colours.forEach(v=>{
//   console.log('reg.test(v)',reg.test(v));
// })


// 2.匹配货币格式
// const reg2 = /^\d{1,10}\.?\d{0,2}$/
// const nums = [1223.24,5554.223,11111222223.5,1.12,100]
// nums.forEach(v=>{
//   console.log(`${v}`,reg2.test(`${v}`));
// })


// 3.匹配时间
// const reg3 = /^([2][0-4]|[0-1][0-9]):[0-5][0-9]$/

// const time = ['23:04','00:00','18:88','25:154']
// time.forEach(v=>{
//   console.log(`${v} 的时间格式是否正确：`,reg3.test(v));
// })

// 4.匹配日期
// const reg4 = /^\d{4}(-|\/)(0[1-9]|1[0-2])(-|\/)([0-2][0-9]|3[0-1])$/
// const date = ['2016-07-12','2017-01-31','2016-13-13','2022/12/32','2016/02/14','22222/12/31']
// date.forEach(v=>{
//   console.log(`${v}`,reg4.test(v));
// })

// 5.匹配window操作系统文件路径
// [^\\:*<>|"?\r\n/] 排除了文件名所禁用的一些规则
// const reg5 = /^[C-Z]:(\\[^\\:*<>|"?\r\n/]?)+/
// const path = [
//   'C:\\study\\javascript\\regex\\regular expression.pdf',
//   'F:\\study\\javascript\\regex\\',
//   'F:\\study\\javascript',
//   'F:\\',
//   'C:\/fd:\/']
// path.forEach(v => {
//   console.log(`${v}`, reg5.test(v));
// })

// 6.匹配元素中的id属性值
// 要求从：<div id="container" class="main"></div> 中取出id="container"的container值
const getIdreg = /id="[^"]*"/g
const element = [
  '<div id="container" class="main">hello world</div>',
  '<h1 id="title">id="fff"</h1>',
  '<title iid="small"></title>',
  '<titleid="test"></title>'
]
element.forEach(v => {
  console.log('v', v.match(getIdreg));
})
