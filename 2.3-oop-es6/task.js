// FIRST TASK
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
      this.name = name
      this.releaseDate = releaseDate
      this.state = state 
      this.type = type
        
    }
    fix(){
        return this.state = this.state* 1.5
    }    
    set state(figure){
      if(this.figure < 0){
        this._state = 0
      }else if(this.state > 100){
        this._state = 100
      } else {this._state = figure}
    }
    get state() {
      return this._state
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = "magazine"){
  super(name, releaseDate, pagesCount, state)
  this.type = type
  }
}

class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount, state, type = "book"){
  super(name, releaseDate, pagesCount, state)
  this.type = type;
  this.author = author;
  }
}

class NovelBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state, type = "novel"){
  super(author, name, releaseDate, pagesCount, state)
  this.type = type;
  }
}

class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state, type = "fantastic"){
    super(author, name, releaseDate, pagesCount, state)    
    this.type = type;   
  }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log("должен быть 10: " + picknick.state); //10
picknick.fix();
console.log("должен быть 15: " + picknick.state); //15


// SECOND TASK

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
      this.name = name
      this.releaseDate = releaseDate
      this.state = state 
      this.type = type
        
    }
    fix(){
        return this.state = this.state* 1.5
    }    
    set state(figure){
      if(this.figure < 0){
        this._state = 0
      }else if(this.state > 100){
        this._state = 100
      } else {this._state = figure}
    }
    get state() {
      return this._state
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = "magazine"){
  super(name, releaseDate, pagesCount, state)
  this.type = type
  }
}

class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount, state, type = "book"){
  super(name, releaseDate, pagesCount, state)
  this.type = type;
  this.author = author;
  }
}

class NovelBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state, type = "novel"){
  super(author, name, releaseDate, pagesCount, state)
  this.type = type;
  }
}

class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state, type = "fantastic"){
    super(author, name, releaseDate, pagesCount, state)    
    this.type = type;   
  }
}

class DetectiveBook extends Book{
  constructor(author, name, releaseDate, pagesCount, state, type = "detective"){
    super(author, name, releaseDate, pagesCount, state)    
    this.type = type;   
  }
}

class Library{
  constructor(name = "", books = []){
  this.name = name
  this.books = books
  }
  addBook(picknick){
    if(picknick.state > 30){
      this.books.push(picknick)
    }
  }
  findBookBy(type, value){
    for(let i = 0; i < this.books.length; i++){      
        if(this.books[i][type] === value){
          return this.books[i].name
        }         
    }  
    return null 
  } 
  giveBookByName(bookName){
    for(let i = 0; i < this.books.length; i++){
    if(bookName === this.books[i].name ){
      return this.books.splice(i, 1)
    }
    }
  }
}

