const uncommonFromSentence = (s1, s2) => {
  let arr1 = s1.split(' ')
  let arr2 = s2.split(' ')

  let arr = arr1.concat(arr2).sort()
  console.log(arr)

  let res = []

  let lastIndex = arr.length - 1

  let i = 0;
  while (i <= lastIndex) {

    let index = arr.lastIndexOf(arr[i])
    console.log(i,arr[i],index)
    if (i != index)  {
      i = lastIndex + 1
    }
    else { 
      res.push(arr[i]); 
      i++ 
    }
    console.log({res},i)
  }

  return res
}

// const s1 = "gw pk xy"
// const s2 = "gw aje zqd"

const s1 = "s z z z s"
const s2 = "s z ejt"
let res = uncommonFromSentence(s1, s2)
console.log({ res })