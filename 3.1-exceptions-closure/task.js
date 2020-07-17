// thirst task

function parseCount(num){
    const a = parseInt(num)
    
    if(isNaN(a)){    
    throw  new Error("Невалидное значение")
    };
    return a;
};

function validateCount(needParse){
    try{
        return parseCount(needParse);
    } catch (e){
        return e
    };
};

//second task

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;                   
        if ((a + b) < c || (a + c) < b || (b + c) < a){
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
    
    try{        
        return new Triangle(a, b = b, c = c);
    }catch(e){
        const falseTriangle = {
            getArea(){
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует"
            }
            

        }
        return falseTriangle
        // не могу понять как релизовать =>  * В случае перехвата исключения возвращайте объект с двумя методами `getArea` и `getPerimeter`, которые возвращают строку: *"Ошибка! Треугольник не существует"*.

        
    };

}