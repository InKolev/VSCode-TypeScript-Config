class Position3D {
    public xCoord: number;
    public yCoord: number;
    public zCoord: number;

    constructor(xCoord: number, yCoord: number, zCoord: number) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.zCoord = zCoord;
    }
}

abstract class Shape {
    private _position: Position3D;

    constructor(position: Position3D) {
        this._position = position;
    }

    public abstract calculateSurface(): number;
}

class Square extends Shape {
    private _height: number;
    private _width: number;

    constructor(height: number, width: number) {
        super(new Position3D(0, 0, 0))
        this._height = height;
        this._width = width;
    }

    public calculateSurface(): number {
        return this._height * this._width;
    }
}

class Circle extends Shape {
    private _radius: number;

    constructor(radius: number) {
        super(new Position3D(0, 0, 0))
        this._radius = radius;
    }

    public calculateSurface(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}


function printShapeSurface(shape: Shape) {
    const surface = shape.calculateSurface();
    console.log(surface);
}

let square: Square = new Square(5, 5);
let circle: Circle = new Circle(10);

printShapeSurface(square);
printShapeSurface(circle);
