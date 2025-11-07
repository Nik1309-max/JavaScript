let anotherBalance = new Number(120)
console.log(anotherBalance.valueOf());
console.log(typeof anotherBalance);

let isActive = true
let isReallyActive = new Boolean(true)
console.log(typeof isActive)
console.log(typeof isReallyActive)
console.log(isReallyActive.valueOf())

let name = null
let lastname = undefined
console.log( name)
console.log(lastname)

let myString = "hello"
let myStringOne = 'Hola'
let username = 'nikhil'
let oldGreet = myString + 'nikhil'
let greetMessage = `Hello ${username}`
console.log(greetMessage)

let sm1 = Symbol("nikhil")
let sm2 = Symbol("nikhil")
console.log(sm1==sm2)
console.log(sm1,sm2)

const username= {
    firstname:"nikhil",
    isLoggedin:true,
};
console.log(username)
console.log(typeof username)

let today = new Date()
console.log(today)

let teaFlavors = ["green tea", "black tea","oolong tea"]
let firstTea = teaFlavors[0]
console.log(firstTea) 

let cities = ["London","Tokyo","Paris","New York"]
const favoriteCity = cities[2];
console.log(favoriteCity)

let teaTypes = ["herbal tea", "whhite tea","masala chai"]
teaTypes[1] = "jasmine tea";
console.log(teaTypes)

let citiesVisited = ["mumbai","Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited)

let teaOrders = ["chai","iced tea","matcha","earl grey"]
const lastOrder=teaOrders.pop()
console.log(lastOrder)

let popularTeas = ["green tea",'oolang tea',"chai"]
let softCopyTeas = popularTeas

let topCities = ["Berlin","Singapore","New York"]
// let hardCopyCities = [...topCities]
// let hardCopyCities = topCities.slice()
topCities.pop()
console.log(hardCopyCities)

let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(europeanCities)

let teaMenu = ["masala chai","oolong tea","green tea"]
let menuLength = teaMenu.length
console.log(menuLength)

let cityBucketList = ["kyoto","London","Cape Town","Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)

let count = 1
let sum = 0
while (count<=5){
    sum+=count
    count+=1
}
console.log(sum)

let count = 5
let arr = []
while (count>0){
    arr.push(count)
    count--
}
console.log(arr)
let teaCollection = []
let tea;

do{
    tea = prompt(`Enter your favourite tea (type "stop" to finish) `)
    if(tea!="stop"){
        teaCollection.push(tea)
    }
}while(tea !== "stop");
console.log(teaCollection)

let sum = 0
let i = 1
do{
    sum+=i
    i+=1
}while(i<=3);
console.log(sum)

let arr = [2,4,6]
let multipliedNumber=[];
arr.forEach(i => {
    multipliedNumber.push(i*2)
});
console.log(multipliedNumber)

for(let i=0;i<arr.length;i++){
    multipliedNumber.push(arr[i]*2)
}
console.log(multipliedNumber)

let cities = ["Paris","New York","London","Tokyo"]
let citiescopy = []
for(let i=0;i<cities.length;i++
){
    console.log(cities[i])
    citiescopy.push(cities[i])
}
console.log(citiescopy)

let chaiType = ["green tea","black tea","chai","oolong tea"]
let selectedTeas = []
for(let i=0;i<chaiType.length;i++){
    if (chaiType[i]!="chai"){
        selectedTeas.push(chaiType[i])
    }else{
        break
    }
}
console.log(selectedTeas)
let city=["London","Paris","Berlin","New York"]
let visitedCities = []
for (let i=0;i<city.length;i++){
    if(city[i]!="Paris"){
        visitedCities.push(city[i])
    }else{
        continue
    }
}
console.log(visitedCities)

let numbers = [1,2,3,4,5]
let smallNumbers = []
for (const i of numbers) {
    if (i===4){
        break
    }
    smallNumbers.push(i)
}   
console.log(smallNumbers)

let teas = ["chai","green tea","herbal tea","black tea"]
let prefferedTeas = []
for (let i of teas) {
    if (i==="herbal tea"){
        continue
    }
    prefferedTeas.push(i)
}
console.log(prefferedTeas)

let citiesPopulation = {
    "London" :8900000,
    "New York": 8400000,
    "Paris":2200000,
    "Berlin":3500000
}

let cityPopulations = {}
for(let i in citiesPopulation){
    if (i==="Berlin"){
        continue
    }
    cityPopulations[i] = citiesPopulation[i]
}
console.log(cityPopulations)

let worldCities = {
    "Sydney":5000000,
    "Tokyo": 9000000,
    "Berlin":3500000,
    "Paris":2200000
}
let largeCities = {}
for(let i in worldCities){
    if (worldCities[i]<3000000){
        continue
    }
    largeCities[i] = worldCities[i]
}
console.log(largeCities)

let arr = ["earl grey","green tea","chai","oolong tea"]
let availableTeas = []
arr.forEach(i => {
    if(i==="chai"){
        return false;
    }
    availableTeas.push(i)
    return true;
});

console.log(availableTeas)

let cities = ["Berlin","Tokyo","Sydney","Paris"]
let travelledCities = []
cities.forEach(function(i){
    if(i==='Sydney'){
        return;
    }
    travelledCities.push(i)
});
console.log(travelledCities)

let arr = [2,5,7,9]
let doubledNumbers = []
for(i of arr){
    if (i===7){
        continue
    }
    doubledNumbers.push(i*2)
}
console.log(doubledNumbers)

let arr = ["chai","green tea","black tea","jasmine tea","herbal tea"]
let shortTeas = []
for(const i of arr){
    if (i.length>10){
        break
    }
    shortTeas.push(i)
}
console.log(shortTeas)

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}
let greet = makeTea("lemon tea")
console.log(greet)

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder()
}
let count = orderTea()
console.log(count)

const greet = (price, quantity) => price*quantity

console.log(greet(365,200))

function makeTea(yes){
    return `Hello ${yes}`
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}
let order = processTeaOrder(makeTea)
console.log(order)


function createTeaMaker(){
    return function (teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result) 

let computer = {
    cpu: 12,
    ram:24
}
let lenovo = {
    screen:"HD",
    __proto__:computer
}
let tomHardware = {}

console.log(lenovo.__proto__)

let genericCar = {tyres:4}
let tesla = {
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCar)
console.log(`tesla `,Object.getPrototypeOf(tesla))

function Person(name,age){
    this.name = name
    this.age = age
}

function Car(make,model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota","Camry")
console.log(myCar)

let myNewCar = new Car("Tata","Safari")
console.log(myNewCar)

function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup of ${type}`
    }
}
let lemonTea = new Tea("lemon tea")
console.log(lemonTea.describe())

function Animal(species){
    this.species = species

}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("DOg")
console.log(dog.sound())

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let tea = new Drink("tea")

let car = {
    make: "Toyota",
    model:"Camry",
    year:2020,
    start:function(){
        return  `${this.make} car got started in ${this.year}.`
    }
};

console.log(car.start())

function Person(name,age){
    this.name = name,
    this.age = age
}
let john = new Person("john",20)
console.log(john.name)

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function (){
    return `${this.type} makes a sound`
}

Array.prototype.nikhil = function(){
    return ``
}

class Vehicle{
    constructor(make,model){
        this.make = make,
        this.model = model
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritence example`
    }

}

let myCar = new Car("Toyota","Corola")
console.log(myCar.start())

class BankAccount {
    #balance = 0;
    deposit(amount){
        this.#balance+=amount
        return this.#balance
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
account.deposit(900)
console.log(account.getBalance())

class CoffeMachine {
    start(){
        return `Starting the machine...`
    }
    brewCoffee(){
        return `Brewing coffee`
    }
}

let myMachine = new CoffeMachine
console.log(myMachine.start())

class Bird{
    fly(){
        return `Flying...`
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}
let bird = new Bird
let penguin = new Penguin()
console.log(bird.fly())
console.log(penguin.fly())


class Calculator{
    static add(a,b){
        return a+b
    }
}

let miniCalc = new Calculator()


console.log(Calculator.add(2,3))

class Employee{
    constructor(name,salary){
        this.name = name
        this._salary = salary
    }
    get salary(){
        return `You are not allowed to see salary`
    }
    set salary(value){
        if(value<0){
            console.error("Invalid salary")
        }else{
            this._salary = value
         }
    }
}
let emp = new Employee("Alice",30000)
console.log(emp.salary)
emp.salary = -60000;
