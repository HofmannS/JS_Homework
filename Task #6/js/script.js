//1. Создайте класс Car с свойствами mark (марка), model (модель) и year (год выпуска). Добавьте метод age(), который вычисляет возраст автомобиля (на основе текущего года).
class Car {
    year = 0
    constructor(mark, model, year){
        this.mark = mark
        this.model = model
        this.year = year
    }
    age(){
        const currentJear = new Date().getFullYear()
        return currentJear - this.year
    }
}
let newCar = new Car("Mersedes", "s600", 1997)
// console.log(newCar.age());


//2.Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение.
class Person {

  constructor(username, age = 18, email) {
    this.name = username
    this.age = age
    if(!email.includes("@")){
        throw new Error("Email должен содержать символ @ ");
    }else if(!email.includes(".")){
        throw new Error("Email должен содержать символ . ");
    }
    this.email = email
  }

  setName(username) {
    this.name = username
  }

  incrementAge() {
    this.age++
  }
  change_email(newEmail){
    if(!newEmail.includes("@")){
        throw new Error("Email должен содержать символ @ ");
    }else if(!newEmail.includes(".")){
        throw new Error("Email должен содержать символ . ");
    }
    this.email = newEmail
  }
}
let user1 = new Person("Mike", 32, 'mikenickolson@gmail.com')
user1.change_email("mnicklsong@mail.com")
// console.log(user1);


//3.Создайте класс Library, который хранит статический массив книг. Каждая книга – это объект с свойствами title и author. Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.
class Library {
    static books = []
    static addBook(book){
       return Library.books.push(book)
    }
    static listBooks(){
        console.log("Список книг в библиотеке:");
        this.books.forEach((book) => {
            console.log(`Название кники: "${book.title}", автор книги: ${book.author}`);
            
        })
    }
}
class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}
Library.addBook(new Book("Руслан и Людмила", "Пушкин А.С."))
Library.addBook(new Book("Война и Мир", "Толстой Л.Н."))
// Library.listBooks()

//4.Создайте класс Rectangle с приватными свойствами #width и #height. Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами. Добавьте метод area(), который возвращает площадь прямоугольника.
class Rectangle{
    #width
    #height
    constructor(width, height){
        this.#width = width
        this.#height = height
    }
    get width(){
        this.#width
    }
    set width(value){
        if (value > 0) {
            this.#width = value;
          } else {
            throw new Error("Ширина не может быть меньше нуля");
          }
    }
    get height(){
        this.#height
    }
    set height(value){
        if (value > 0) {
            this.#height = value;
          } else {
            throw new Error("Высота не может быть меньше нуля");
          }
    }
    area(){
        return this.#width * this.#height
    }
}
const rect = new Rectangle(15, 22)
// console.log(rect.area());


//5.Создайте класс BankAccount с приватным свойством #balance. Реализуйте методы для депозита и снятия средств. Добавьте геттер для получения текущего баланса. При попытке снять сумму, большую чем баланс, выбрасывайте исключение. Затем создайте статический метод, который ведёт учёт всех созданных счетов (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.
class BankAccount{
    #balance
    static accounts = []
    constructor(accountsName, balance = 0){
        this.account = accountsName
        this.#balance = balance
        BankAccount.accounts.push(this)
    }
    get balance(){
        return this.#balance
    }
    deposit(value){
        this.#balance += value
    }
    withdrawal(value){
        if(typeof value !== "number"){
            throw new Error("Пожалуйста, введите только число");
        }
        if(value > this.#balance){
            throw new Error("Сумма на счете не достаточна для выполнения операции.");
        }
        this.#balance -= value
    }
    static totalBalance(){
        return BankAccount.accounts.reduce((acc, account)=>acc+account.#balance, 0)
    } 
}
const account1 = new BankAccount("Счет 1", 1000);
const account2 = new BankAccount("Счет 2", 500);
account1.deposit(200);
console.log(account1.balance);

console.log(BankAccount.totalBalance());

try {
    account1.withdrawal(1500); 
} catch (error) {
    console.error(error.message);
}