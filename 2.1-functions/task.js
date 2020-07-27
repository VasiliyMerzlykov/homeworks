// FIRST TASK
function getSolutions( a, b, c ){
    let d = b**2 - 4*a*c;
    if(d < 0){
        return { D: d, roots: [] };
    }else if(d === 0){
        let x1 = -b / 2*a;
        return { D: d, roots: [x1] };
    }else if (d > 0){
        let x1 = (-b + Math.sqrt(d)) / (2*a);
        let x2 = (-b - Math.sqrt(d)) / (2*a);        
        return { D: d, roots: [x1, x2] };
    }
}


function showSolutionsMessage( a, b, c ){
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»*`);
    console.log(`«Значение дискриминанта: ${result.D}»`);
    if(result.D < 0){
      console.log(`«Уравнение не имеет вещественных корней»`);
    } else if(result.D === 0){
      console.log(`«Уравнение имеет один корень X₁ = ${result.roots}»`);
    } else if(result.D > 0){
      console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
    };
}

//SECOND TASK

let array = {
  alg: [1,3,5,6],
  geo: [5,4,3]
}
function getSum(marks){
  let sum = 0;
  for( let i = 0; i < marks.length; i++){
    sum += marks[i] /marks.length;
  }
 return sum;
}
function getAverageScore(data){
  let obj = {};
  let sumAverage = 0;
  let i = 0;
  let allAverage = 0;
  for(let key in data){
    ++i;
    obj[key] = getSum(data[key]);
    sumAverage += obj[key];
    allAverage = sumAverage/i;
    obj.average = allAverage;
  }
  return obj;
}

console.log(getAverageScore( {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5]
}))