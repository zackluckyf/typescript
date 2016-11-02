var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Engine started " + this.engine);
    };
    Car.prototype.stop = function () {
        console.log("Engine stopped " + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
var num = 2;
var num1 = 20;
var num2 = 100;
var lastName = 'smith';
function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    console.log(result);
}
addNumbers(num, num1, num2);
document.title = 'hello';
var data = 'Hello John';
$('div').text(data);
var squareIt;
var rectA = { h: 3 };
var rectB = { h: 3, w: 4 };
squareIt = function (rect) {
    if (rect.w !== undefined) {
        return rect.h * rect.w;
    }
    return rect.h * rect.h;
};
console.log(squareIt(rectA));
console.log(squareIt(rectB));
var p = {
    name: 'Zack',
    age: 23,
    pets: 2,
    calcPets: function () { return 2 * p.pets; },
    greet: function (msg) {
        return msg + ' ' + p.name;
    }
};
var pets = p.calcPets();
console.log(pets);
var greeting = p.greet('hello');
console.log(greeting);
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rect = new Shapes.Rectangle(2, 4);
var Shapes;
(function (Shapes) {
    var Circle = (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var circle = new Shapes.Circle(10);
console.log(rect);
console.log(circle);
//# sourceMappingURL=bundle.js.map