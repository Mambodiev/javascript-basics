function Apple(color,weight) 
{
    this.color = color;
    this.score = weight;
}
Apple.prototype = {
    eat   :function () {
        return 'eat the apple';
    },
    throw   :function () {
        return 'throw the apple';
    },
}
var apple1 = new Apple (10, 20, 'red', 200);
var apple2 = new Apple (32, 15, 'green', 300);
var apple3 = new Apple (40, 25, 'red', 150);