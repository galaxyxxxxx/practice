const quick = (arr) => {

  if (arr.length <= 1) return arr;

  let pivotIndex = Math.floor(arr.length / 2);

  let pivot = arr.splice(pivotIndex, 1)[0];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    }else{
      right.push(arr[i])
    }
  }

  return quick(left).concat([pivot],  quick(right));

}

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quick(arr))