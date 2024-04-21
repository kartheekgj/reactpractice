const a = 10;

function b() {
  console.log(a); 
  const a = 11;
}
b();

console.log(a);

console.log(1);
setTimeout(()=>{
  console.log(2);
},10);

var promise = new Promise((resolve,reject)=>{
   console.log(5);
  setTimeout(()=>{
    console.log(6);
  },10)
  resolve('done');
})
promise.then(()=>{
  console.log(3);
  setTimeout(()=>{
    console.log(4);
  },10)
})

//1 5 3 2 6 4


const arrayData = [[1,2],3,[4,[5,6]],7];
export default function flatten(value) {
  const result = [];
  value.forEach(data =>{
      if(Array.isArray(data)){
        result.push(...flatten(data));
      }else{
        result.push(data);
      }
    });

  return result;

}

export default function promiseAll(iterable) {
  return new Promise((resolve, reject) =>{
    let unresolved = iterable.length;
    const results = new Array(unresolved);

    if(unresolved === 0){
      resolve(results);
      return
    }


    iterable.forEach(async (item,index)=>{
      try{
        const value = await item;
        results[index] = value;
        unresolved -=1;
        if(unresolved === 0){
         resolve(results)
        }
      }catch(e){
        reject(e)
      }
      
    })
  });
}

export default function debounce(func, wait) {
  let timerId = null;
  if(wait < 50000){
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
          func.apply(this, args);
        }, wait)
      }
  }
  
}

export default function deepClone(value) {
  //return structuredClone(value);
  if(value == null || typeof value != "object"){
    return value;
  }
  const newObj = Array.isArray(value) ? [] : {};
  for(let key in value){
    newObj[key] = deepClone(value[key]);
  }
  return newObj
}


