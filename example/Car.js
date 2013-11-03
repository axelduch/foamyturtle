// assume scope to be "this" in Car class
var scope = {
        color: 'blue',
        dirty: true,
        chewy: +9000
    },
    Car = new FoamyTurtle.Class({
    // Color descriptor
    color: {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        }
    },
    dirty: {
        set: function (value) {
            this.dirty = !!value;
        }
    },
    // isAwesome descriptor
    isAwesome: {
        get: function () {
            return this.dirty + this.chewy > 9000;
        }
    },
    // chewy descriptor
    chewy: {
        get: function () {
            return;
        }
    }
}, scope),
    car = new Car();

console.log(car.color);
console.log(car.isAwesome);

car.color = 'red';
car.dirty = 0;

console.log(car.color);
console.log(car.isAwesome);