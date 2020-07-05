function getResult(a,b,c){
    "use strict";
    let x =[];
    let d = b**2 - 4*a*c
    if(d === 0){x.push((-b + Math.sqrt(d))/(2*a))
    } else if(d > 0){
        x.push((-b + Math.sqrt(d))/(2*a))
        x.push((-b - Math.sqrt(d))/(2*a))
    } else if(d < 0){
      x = 0
    }
     return x;
}

function getAverageMark(marks){   
    let a = 0; 
    if(marks.length){
      if(marks.length > 5){
        console.log("Оценок больше 5")}
        marks.splice(5)  
        for(let i = 0; i <= marks.length - 1; i++){   
          a = marks[i] + a   
    }
    a = a / marks.length    
  } else if (marks.length === 0){
    return 0
  }  
      // код для задачи №2 писать здесь
       return a;
}

function askDrink(name,dateOfBirthday){
    let yearBirtha = dateOfBirthday.getFullYear()
    let toDay = new Date().getFullYear()
    let age = toDay - yearBirtha
    return age >= 18? `Не желаете ли олд-фэшн, ${name}?`: `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    
}