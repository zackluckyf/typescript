// hello world type bit
class Car {
  engine: string;
  constructor(engine: string){
    this.engine = engine;
  }
  start() {
    console.log(`Engine started ${this.engine}`)
  }
  stop(){
    console.log(`Engine stopped ${this.engine}`)
  }
}

window.onload = function(){
  var car = new Car('V8');
  car.start();
  car.stop();
}

// type anotations
var num: number = 2;
var num1 = 20;
var num2: number = 100;
var lastName: string = 'smith';

function addNumbers(n1: number,n2: number,n3: number){
  var result = n1+n2+n3;
  console.log(result);
}

addNumbers(num,num1,num2);

/// <reference path="node_modules/@types/jquery/index.d.ts" />

document.title = 'hello';

var data = 'Hello John';

$('div').text(data);

var squareIt:
  (rect: {h: number, w?: number;}) => number;

var rectA = {h: 3};
var rectB = {h: 3, w:4};

squareIt = function(rect){
  if(rect.w !== undefined){
    return rect.h * rect.w;
  }
  return rect.h * rect.h;
}

console.log(squareIt(rectA));
console.log(squareIt(rectB));

interface Person {
  name : string;
  age?: number;
  pets: number;
  calcPets: () => number;
  greet: (msg: string) => string;
}

// since I used arrow functions with the methods
// I had to use p instead of this since this is
// lexically scoped to the window
var p: Person = {
  name : 'Zack',
  age: 23,
  pets: 2,
  calcPets: () => 2*p.pets,
  greet: (msg: string) => {
    return msg + ' ' + p.name;
  }
};

var pets = p.calcPets();
console.log(pets);
var greeting = p.greet('hello')
console.log(greeting);

// modules can be opened/reopened and added to whenever

namespace Shapes{
  export class Rectangle{
    constructor(public height: number, public width: number){
    }
  }
}

var rect = new Shapes.Rectangle(2,4);

namespace Shapes{
  export class Circle{
    constructor(public radius: number){
    }
  }
}

var circle = new Shapes.Circle(10);

console.log(rect);
console.log(circle);
