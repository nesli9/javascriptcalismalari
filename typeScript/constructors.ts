interface Point {
    x:number ,
    y:number
}

interface Vehicle {
    currentLocation : Point;
    travelTo(point : Point):void;
    
}

class Taxi implements Vehicle{
    color : string;

    constructor(location?: Point , color?: string){ //contructor ile nesnenin 3 farklı versdiyonu hazırlanmış oldu . hiç bilgi olmayan ,bir bilgi olan veya iki bilgide olan
        this.currentLocation  = location;
        this.color = color;
    }


    currentLocation : Point;
    travelTo(point : Point):void {
        console.log(`Taksi X:${point.x} Y:${point.y} konumuna gidiyor`);
    };
}

class Bus implements Vehicle{
    //..
    currentLocation : Point;
    travelTo(point : Point):void {
        console.log(`Otobus X:${point.x} Y:${point.y} konumuna gidiyor`);
    };
}

let taxi_1 : Taxi = new Taxi({x:1 ,y:5});
taxi_1.travelTo({x:1,y:2});
//taxi_1.color = 'red';

console.log(taxi_1.currentLocation);

let taxi_2 = new Taxi({x:2 , y:5},'red');
let taxi_3 = new Taxi();

