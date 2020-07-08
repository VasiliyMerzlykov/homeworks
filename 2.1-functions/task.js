// FIRST TASK
function getSolutions( a, b, c ){
    let d = b**2 - 4*a*c;
    if(d < 0){
        return { D: d, roots: [] }
    }else if(d === 0){
        let x1 = -b / 2*a;
        return { D: d, roots: [x1] }
    }else if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / 2*a;
        let x2 = (-b - Math.sqrt(d)) / 2*a;        
        return { D: d, roots: [x1, x2] }
    }
}


function showSolutionsMessage( a, b, c ){
    let result = getSolutions(2, 3, 1);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${a}x + ${a}»*`);
    console.log(`«Значение дискриминанта: ${result.D}»`);
    if(result.D < 0){
      console.log(`«Уравнение не имеет вещественных корней»`)
    } else if(result.D === 0){
      console.log(`«Уравнение имеет один корень X₁ = ${result.roots}»`)
    } else if(result.D > 0){
      console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`)
    }
}

//SECOND TASK

let array = {
  alg: [1,3,5,6],
  geo: [5,4,3]
}
function getSum(marks){//принимает объект
  let sum = 0;// переменная для сложения оценок
  for( let i = 0; i < marks.length; i++){//перебираем массив
    sum += marks[i] /marks.length // складываем значения массива и делим на длину
  }
 return sum //Возвращаем результат
}
function getAverageScore(data){//принимает объект
  let obj = {};
  let sumAverage = 0;
  let i = 0;
  let allAverage = 0;
  for(key in data){//перебираем объект 
    ++i
    obj[key] = getSum(data[key])
    sumAverage += obj[key]
    allAverage = sumAverage/i
    obj.average = allAverage
  }
  return obj  
}

// второй вариант второй функции
// function getAverageScore(data){//принимает объект
//   let obj = {};
//   let sumAverage = 0;
//   let i = Object.keys(array);
//   let allAverage = 0;
//   for(key in data){//перебираем объект
//     obj[key] = getSum(data[key])
//     sumAverage += obj[key]
//     allAverage = sumAverage/Object.keys(array).length
//     obj.average = allAverage
//   }
//   return obj  
// }

// getAverageScore(array)

//THIRD TASK
