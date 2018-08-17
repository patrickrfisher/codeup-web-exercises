(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function getArea() {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return (Math.PI * Math.pow(this.radius, 2));// TODO: return the proper value
        },
        // var doRounding = Math.round(circle);?? why cant this work

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // var doRounding = Math.round(getArea);why can this one work but not round
            if (doRounding){
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + (Math.round(this.getArea())));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    var circle2 = {
        radius: 5,

        getArea: function getArea() {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return (Math.PI * Math.pow(this.radius, 2));// TODO: return the proper value
        },
        // var doRounding = Math.round(circle);

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // var doRounding = Math.round(getArea);why can this one work but not round
            if (doRounding){
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + (Math.round(circle2.getArea())));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle2.getArea());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle2.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle2.logInfo(true);
})();