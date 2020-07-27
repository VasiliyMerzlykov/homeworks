// // FIRST TASK
// class PrintEditionItem{
//     constructor(name, releaseDate, pagesCount, state = 100, type = null){
//       this.name = name
//       this.releaseDate = releaseDate
//       this.state = state 
//       this.type = type
        
//     }
//     fix(){
//         return this.state = this.state* 1.5
//     }    
//     set state(figure) {
//       if(figure < 0){
//         this._state = 0
//       } else if(figure > 100){
//         this._state = 100
//       } 
//     }
//     get state() {
//       return this._state
//     }
// }

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// class Magazine extends PrintEditionItem {
//   constructor(name, releaseDate, pagesCount, state, type = "magazine"){
//   super(name, releaseDate, pagesCount, state)
//   this.type = type
//   }
// }

// class Book extends PrintEditionItem{
//   constructor(author, name, releaseDate, pagesCount, state, type = "book"){
//   super(name, releaseDate, pagesCount, state)
//   this.type = type;
//   this.author = author;
//   }
// }

// class NovelBook extends Book{
//   constructor(author, name, releaseDate, pagesCount, state, type = "novel"){
//   super(author, name, releaseDate, pagesCount, state)
//   this.type = type;
//   }
// }

// class FantasticBook extends Book{
//   constructor(author, name, releaseDate, pagesCount, state, type = "fantastic"){
//     super(author, name, releaseDate, pagesCount, state)    
//     this.type = type;   
//   }
// }

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

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
      if(figure < 0){
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
          return this.books[i]
        }         
    }  
    return null 
  } 
  giveBookByName(bookName){
    for(let i = 0; i < this.books.length; i++){
    if(bookName === this.books[i].name ){
      this.books.splice(i, 1)
      return this.books[i]
    }
    }
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log( library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

