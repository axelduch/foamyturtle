var scope = {
        color: 'blue',
        dirty: true,
        chewy: +9000
    },
    Car = new FoamyTurtle.Class({
    color: {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        }
    },
    isAwesome: {
        get: function () {
            return this.dirty + this.chewy > 9000;
        }
    },
    chewy: {
        get: function () {
            return;
        }
    }
}, scope);

console.log(Car.color);
console.log(Car.isAwesome);