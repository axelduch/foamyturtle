var Car = new FoamyTurtle.Class({
    color: {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        }
    }
}, {
    color: 'haha'
});


Car.color = null;
Car.color;