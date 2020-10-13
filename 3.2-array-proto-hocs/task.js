function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}


let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);




function memorize(fn, limit){
  let memory = [];
  function mSum(...args){
    let search = memory.find(item => compareArrays(item.args, args));
    let result = search ? search.result : fn(...args);
    if(!search){
      memory.push({args: args, result: result})
    }
    if(memory.length > limit){
      memory.shift()
    }
    return result;
  }
  return mSum
}

