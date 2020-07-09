function calculateTotalMortgage(percent, contribution, amount, date) {
    "use ctrict"
    
    let creditBody = amount - contribution    
    let loanРeriod = Math.floor((date - new Date())/(1000*60 * 60 * 24 * 30))     
    let monthlyPayment = creditBody*(percent + percent/(((1+percent)**loanРeriod)))    
    let totalAmount = monthlyPayment * loanРeriod
    if(isNaN(+percent)){
      return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
    } ;
    if(isNaN(+contribution)){
      return `Параметр <Начальный взнос> содержит неправильное значение <${contribution}>`;
    } ;
    if(isNaN(+amount)) {
      return `Параметр <Общая стоймость> содержит неправильное значение <${amount}>`;
    };
        
    return (totalAmount.toFixed(2)/100);
}

function getGreeting(name) {
    let greeting;
    if (name !== "undefined" && name.length > 0) {
  return greeting = `Привет, мир! Меня зовут ${name}`;
}else {return greeting = "Привет, мир! Меня зовут Аноним"}     
}
