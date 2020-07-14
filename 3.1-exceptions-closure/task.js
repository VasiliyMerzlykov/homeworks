// thirst task

function parseCount(num){
    num = parseInt(num)
    if(isNaN(num)){    
    throw  new Error("Невалидное значение")
    };
    return num;
};

function validateCount(needParse){
    try{
        return parseCount(needParse);
    } catch (e){
        return e.message
    };
};

//second task

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;                   
        if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a){
            throw new Error("Треугольник с такими сторонами не существует")               
         } 
        };
        getPerimeter(){
            return this.a + this.b + this.c
        };
        getArea(){
            let p = (this.a + this.b + this.c)/2            
            return Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(2)
        };
        
}    

function getTriangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    try{        
        return new Triangle(this.a, this.b = b, this.c = c);
    }catch(e){
        // не могу понять как релизовать =>  * В случае перехвата исключения возвращайте объект с двумя методами `getArea` и `getPerimeter`, которые возвращают строку: *"Ошибка! Треугольник не существует"*.

        return new Triangle("Ошибка! Треугольник не существует")
    };
                
}
 






  
  
  
  