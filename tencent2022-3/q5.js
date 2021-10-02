/**
 * 最近公共父节点
 */

const input = {
  "id":1,
  "zIndex":1,
  "children":[
    {
      "id":2,  
      "zIndex":2
    },
    {
      "id":3,
      "zIndex":1,
      "children":[
        {
          "id":4,
          "zIndex":9
        }]
      }
    ]
  }

function findParentNode(n1,n2){
    while(n1){
        if(n1.contains(n2)) return n1
        n1 = n1.parentNode
    }
}

function json2map(json){
  let map = new Map();
  for(let k of Object.keys(json)){
    if(!isNaN(json[k])){
      map.set(k, json[k]);
    }else{
      map.set(k, json2map(json[k]))
    }
  }
  return map;
}

// let res = findParentNode(2,4)
let res = json2map(input)
console.log(res)