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
  const memory = [];
  function func(...arg){    
    let search = memory.find(index => compareArrays(index.args, arg));    
    if(search){
      return search.result
    };
    if(!search){
      let a = {args: arg, result: arg.reduce((prev, index) => prev+index)};   
      memory.push(a);
      return a;
    };       
  };
  return func
};

