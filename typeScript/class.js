var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X:".concat(point.x, " Y:").concat(point.y, " konumuna gidiyor"));
    };
    ;
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otobus X:".concat(point.x, " Y:").concat(point.y, " konumuna gidiyor"));
    };
    ;
    return Bus;
}());
