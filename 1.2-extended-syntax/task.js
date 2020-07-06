function getResult(a,b,c){
    "use strict";
    let x =[];
    let d = b**2 - 4*a*c
    if(d === 0){
        x.push((-b + Math.sqrt(d))/(2*a))
    } else if(d > 0){
        x.push((-b + Math.sqrt(d))/(2*a))
        x.push((-b - Math.sqrt(d))/(2*a))
    } else return x;
}



//                ***SECOND TRY SECOND TASK*** КОД СТАЛ КОРОЧЕ И ЧИТАБЕЛЬНЕЕ !!! СПАСИБО
function getAverageMark(marks){   
    let sumScores = 0; 
    if(marks.length === 0){
       return a;
    } else if(marks.length){
      marks.splice(5)
      for(let i = 0; i <= marks.length - 1; i++){   
        sumScores = marks[i] + a
      }
    };    
    return (sumScores / marks.length).toFixed(1);
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear() // СПАСИБО ЗА ЭТО ЗАМЕЧАНИЕ, ЭТО РЕАЛЬНО ЧТО-ТО НОВОЕ ДЛЯ МЕНЯ
    return age >= 18? `Не желаете ли олд-фэшн, ${name}?`: `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    
}