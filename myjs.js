/*function Color(color){
    this.color = color;
}
function Car(model, year, color) {
    Color.call(this, color);
    this.model = model;
    this.year = year;
}
Car.prototype = Object.create(Color.prototype);
Car.prototype.constructor = Car;

Car.staticMethod = function () {
    console.log('Static');
}
Car.prototype.carInfo = function (isFullInfo) {
    console.log(`Model: ${this.model}`);
    if (isFullInfo) {
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
}
let car = new Car('BMW', 2013, 'black');
car.carInfo(true);
Car.staticMethod();

function Business(doors, isAirConditional, model, year, color) {
    Car.call(this, model, year, color);
    this.doors = doors;
    this.isAirConditional = isAirConditional;
}
Business.prototype = Object.create(Car.prototype);
Business.prototype.constructor = Business;
Business.prototype.bInfo = function () {
    console.log(this.doors, this.isAirConditional);
}

const bCar = new Business(5,true,'BMW',2023,'yellow');
bCar.bInfo();
bCar.carInfo(true);
console.log(bCar.hasOwnProperty('doors'));

class ColorCl {
    constructor(color) {
        this.color = color;
    }
}

class CarCl extends ColorCl{
    constructor(model, year, color) {
        super(color);
        this.model = model;
        this.year = year;
    }
    static staticMethod() {
        console.log('Static');
    }
    carInfo(isFullInfo) {
        console.log(`Model: ${this.model}`);
        if (isFullInfo) {
            console.log(`Year: ${this.year}`);
            console.log(`Color: ${this.color}`);
        }
    }
}
class BusinessCl extends CarCl{
    constructor(doors, isAirConditional, model, year, color) {
        super(model, year, color);
        this.doors = doors;
        this.isAirConditional = isAirConditional;
    }
    bInfo() {
        console.log(this.doors, this.isAirConditional);
    }
}
const bCarCl = new BusinessCl(5,true,'BMW',2023,'yellow');
console.dir(bCar);
console.dir(bCarCl);*/

//Object.create()
const colorPrototype = {
    infoColor() {
        console.log(this.color);
    },
    init(color) {
        this.color = color;
    }
}
const colorObj = Object.create(colorPrototype);
colorObj.init('yellow');


const carPrototype = Object.create(colorPrototype);
carPrototype.carInfo = function (isFullInfo) {
    console.log(`Model: ${this.model}`);
    if (isFullInfo) {
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
}
carPrototype.init = function (model, year, color) {
    this.year = year;
    this.color = color;
    this.model = model;
}
const car = Object.create(carPrototype);
car.init('BMW', 2023, 'yellow')
console.dir(car);

const businessPrototype = Object.create(carPrototype);
businessPrototype.bInfo = function (params) {
    console.log(this.doors, this.isAirConditional);
}
businessPrototype.init = function (doors, isAirConditional, model, year, color) {
    this.year = year;
    this.color = color;
    this.model = model;
    this.doors = doors;
    this.isAirConditional = isAirConditional;
}

const bCarObj = Object.create(businessPrototype);
bCarObj.init(5,true,'BMW',2023,'yellow');
console.log(bCarObj);

