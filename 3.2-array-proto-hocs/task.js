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


// let compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);




// function memorize(fn, limit){
//   let memory = [];
//   function mSum(...args){
//     let search = memory.find(item => compareArrays(item.args, args));
//     let result = search ? search.result : fn(...args);
//     if(!search){
//       memory.push({args: args, result: result})
//     }
//     if(memory.length > limit){
//       memory.shift()
//     }
//     return result;
//   }
//   return mSum
// }



const compareArrays = (arr1, arr2) => arr1.every((item, index) => item == arr2[index]) && arr1.length == arr2.length

function memorize(fn, limit){
  const memory = [];
  function func (...args){
    const search = memory.find((item) => compareArrays(item.args, args))
    const result = search ? search.result : fn(...args)
    if(!search){
      memory.push({args: args, result: result})
    }
    return result
  };
  return func
}


const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// Вызов этих функций даёт один и тот же результат
console.log(sum(3, 4)); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum(3, 4)); // 7