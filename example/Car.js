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
}, scope);


console.log((new Car()).color);