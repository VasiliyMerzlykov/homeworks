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