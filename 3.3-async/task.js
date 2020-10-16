// class AlarmClock {
//     constructor(){
//       this.alarmCollection =[];
//       this.timerId = null;
//     }
//     addClock(time, callback, id){
//         if(!id){
//             throw new Error('Невозможно инициализировать будильник. Параметр ID не передан!');
//         }
//         if(this.alarmCollection.some(item => item.id === id)){
//             return console.error('Звонок с указанным ID уже существует!');
//         }
//         this.alarmCollection.push({id, time, callback})
//     };
//     removeClock(id){
//         let al = this.alarmCollection.length
//         this.alarmCollection.filter(item => item != id)
//         return al != this.alarmCollection
//     };
//     getCurrentFormattedTime() {
//         return new Date().toTimeString().substr(0, 5);
//     };
//     start() {
//         function checkClock (alarm){
//             if(alarm.time == getCurrentFormattedTime()){
//                 alarm.callback()
//             }
            // if(!this.timerId){
            //     this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000)
            // }           
//         };        
//     };
//     stop(){
//         if(this.timerId){
//             clearInterval(this.timerId);
//             this.timerId = null;
//         }
//     };
//     printAlarms(){
//         this.alarmCollection.forEach(item => console.log(`Будильник ${item.id}, время будильника ${item.time}`))
//     };
//     clearAlarms() {
//         this.stop();
//         this.alarmCollection = [];
//     };
// }

// function testCase() {
//     let alClock = new AlarmClock(); 
//     alarmClock.addClock(new Date().toTimeString().substr(0, 5), () => {
//         console.log('Good night');
//         alarmClock.clearAlarms();
//         alarmClock.printAlarms();
//     }, 3);


// }

// testCase()
// let a = new Date().toTimeString().substr(0, 5)
// let s = new Date()

class  AlarmClock{
    constructor(){
        this.AlarmClock = [];
        this.timerId = null;
    }
    addClock(time, callback, id){
        if(!id){
            throw new Error("НЕТ ИНДИФИКАТОРА ID")
        }
        if(this.AlarmClock.some(item => item === time)){
            console.error("БУДИЛЬНИК УЖЕ СУЩЕСТВУЕТ")
        }
        this.AlarmClock.push({time, callback, id})
    }
    removeClock(id){
        let lengthAC = this.AlarmClock
        this.AlarmClock = this.AlarmClock.filter(item => item.id != id)
        return lengthAC != this.AlarmClock.length
    }
    getCurrentFormattedTime(){
        return new Date().toTimeString().substr(0, 5);
    }
    start(){
        let checkClock = alarm => this.getCurrentFormattedTime() === alarm.time && alarm.callback()
        (!this.timerId) && (this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000));        
    }
    stop(){
        if(!this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms(){
        this.AlarmClock.forEach(item => console.log(`ID будильника: ${item.id}, время будильника: ${item.time}`))
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
};


function testCase(){
    let alarm = new AlarmClock;
    alarm.addClock(alarm.getCurrentFormattedTime(), () => console.log("Good morning"), 1)
    alarm.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5),
    () => {
        console.log("Wake up")
        alarm.removeClock(2);
        alarm.printAlarms();
    }, 2)
    alarm.addClock(new Date(Date.now() + 2 * 60000).toTimeString().substr(0, 5), () => {
        console.log('WAKE UP!!!');
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    alarm.printAlarms();
    alarm.start();
}

testCase()

