function calculateTotalMortgage(percent, contribution, amount, date) {
    "use ctrict"
    
    /*1.тело кредита*/creditBody = amount - contribution
    console.log("Тело кредита.: " + creditBody)
    /*2.срок кредита*/loanРeriod = Math.floor((date - new Date())/(1000*60 * 60 * 24 * 30)) //не пойму как правильно посчитать раздницу между датами и соответственно количества месяцев
    console.log("Срок кредита мес.: " +loanРeriod)
    /*3.платеж*/monthlyPayment = creditBody*(percent + percent/(((1+percent)**loanРeriod)))
    console.log("Платеж мес.: " + monthlyPayment)
    /*4.общая сумма выплаты*/totalAmount = monthlyPayment * loanРeriod
    console.log("Общаяя сумма выплаты: " + totalAmount.toFixed(2))
    // код для задачи №1 писать здесь
    return (totalAmount.toFixed(2)/100);// в консоле считает верно, в калькуляторе - нет, не понимаю почему
}

function getGreeting(name) {
    let greeting;
    if (name !== "undefined" && name.length > 0) {
  return greeting = `Привет, мир! Меня зовут ${name}`;
}else {return greeting = `Аноним`}     
}// не могу решить, в любом случает получается, что name не пустой, а 
