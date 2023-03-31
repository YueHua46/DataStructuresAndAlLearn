// 线性查找
// 功能：查找指定数组中指定的数的索引
// 介绍：是普遍正常的查找，从索引的最小位置到最大位置依次查找，可以是无序数组
// 时间复杂度：O(N)

function linearSearch(arr:Array<number>,num:number){
    let length = arr.length
    for(let i = 0; i < length;i++){
        if(arr[i]==num) {
            return i
        }
    }
    return -1
}

// 无序数组
const arr = [1,5,11,77,54,99,11,57]
let num = 57
let linearIndex = linearSearch(arr,num)
console.log('linearIndex: ',linearIndex)

// 二分查找
// 功能：查找指定数组中指定值的索引位
// PS：只能在一个有序数组中进行查找
// 时间复杂度：O(logN)

function BinarySearch(arr:Array<number>,num:number) {
    let low = 0
    let high = arr.length - 1

    while(low <= high){
        let mid = Math.floor((high + low) / 2)
        console.log('mid',mid)
        if(arr[mid] == num){
            return mid
        }
        if(arr[mid] < num){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
}

// 有序数组
const arr2 = [11,43,66,78,91,150,203,543,674,872]
let num2 = 203
let binaryIndex = BinarySearch(arr2,num2)
console.log('binaryIndex: ',binaryIndex)