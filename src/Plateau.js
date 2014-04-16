function Plateau(endPoint)
{
    this.endPoint = endPoint;
    this.rover = [];


// This initialises a rover at a specified position with direction.
    this.placeNewRover = function (position, direction) {
        this.rover.push(new Rover(position, direction));
    }
}