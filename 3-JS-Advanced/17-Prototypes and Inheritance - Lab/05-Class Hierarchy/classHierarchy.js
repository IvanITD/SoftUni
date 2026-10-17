function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return undefined;
        }

        changeUnits(units) {
            this.units = units;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        get _scale() {
            if (this.units === 'm') {
                return 0.01;
            }

            if (this.units === 'mm') {
                return 10;
            }

            return 1;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get radius() {
            return this._radius * this._scale;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this._width * this._scale;
        }

        get height() {
            return this._height * this._scale;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

const { Circle, Rectangle } = classHierarchy();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

console.log('--------------------------------');

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

console.log('--------------------------------');

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4 c.changeUnits('mm'); console.log(c.area); 
// 7853.981633974483 console.log(c.toString()) 
// Figures units: mm Area: 7853.981633974483 - radius: 50