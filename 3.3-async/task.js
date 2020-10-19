class  AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, callback, id){
        if(!id){
            throw new Error("НЕТ ИНДИФИКАТОРА ID")
        }
        if(this.alarmCollection.some(item => item.id === id)){
            return console.error("БУДИЛЬНИК УЖЕ СУЩЕСТВУЕТ")
        }
        this.alarmCollection.push({id, time, callback})
    }

           
    removeClock(id){
        let lengthAC = this.alarmCollection.length
        this.alarmCollection = this.alarmCollection.filter(item => item.id != id)
        return lengthAC != this.alarmCollection.length
    }
    
    getCurrentFormattedTime(){
        return new Date().toTimeString().substr(0, 5);
    }
    
    start(){
        let checkClock = alarm => (alarm.time == this.getCurrentFormattedTime()) && alarm.callback();
        (!this.timerId) && (this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000));        
    }
    
    stop(){
        if(this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
        
    printAlarms(){
        this.alarmCollection.forEach(item => console.log(`ID будильника: ${item.id}, время будильника: ${item.time}`))
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


