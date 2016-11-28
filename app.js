var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Position3D = (function () {
    function Position3D(xCoord, yCoord, zCoord) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.zCoord = zCoord;
    }
    return Position3D;
}());
var Shape = (function () {
    function Shape(position) {
        this._position = position;
    }
    return Shape;
}());
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(height, width) {
        _super.call(this, new Position3D(0, 0, 0));
        this._height = height;
        this._width = width;
    }
    Square.prototype.calculateSurface = function () {
        return this._height * this._width;
    };
    return Square;
}(Shape));
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        _super.call(this, new Position3D(0, 0, 0));
        this._radius = radius;
    }
    Circle.prototype.calculateSurface = function () {
        return Math.PI * Math.pow(this._radius, 2);
    };
    return Circle;
}(Shape));
function printShapeSurface(shape) {
    var surface = shape.calculateSurface();
    console.log(surface);
}
var square = new Square(5, 5);
var circle = new Circle(10);
printShapeSurface(square);
printShapeSurface(circle);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFLSSxvQkFBWSxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFFRDtJQUdJLGVBQVksUUFBb0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUdMLFlBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUVEO0lBQXFCLDBCQUFLO0lBSXRCLGdCQUFZLE1BQWMsRUFBRSxLQUFhO1FBQ3JDLGtCQUFNLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0saUNBQWdCLEdBQXZCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFiRCxDQUFxQixLQUFLLEdBYXpCO0FBRUQ7SUFBcUIsMEJBQUs7SUFHdEIsZ0JBQVksTUFBYztRQUN0QixrQkFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVNLGlDQUFnQixHQUF2QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFYRCxDQUFxQixLQUFLLEdBV3pCO0FBR0QsMkJBQTJCLEtBQVk7SUFDbkMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQsSUFBSSxNQUFNLEdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLElBQUksTUFBTSxHQUFXLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXBDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDIn0=