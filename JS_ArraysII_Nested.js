/*
function customerLocation(x,y){
    var steps = 0;
    for (var i = 0; i < x; i++){
        steps++;
    }
    for (var i = 0; i < y; i++){
        steps++
    }
    return steps;
}
console.log(customerLocation(9,2));
*/

/*
function customerToJoe(x,y){
    var steps = 0;
    if (x[0] <= y[0] && x[1] <= y[1]){
        for (var i = x[0]; i <= y[0]; i++){
            steps++;
        }
        for (var i = x[1]; i <= y[1]; i++){
            steps++;
        }
    } else if (x[0] >= y[0] && x[1] <= y[1]){
        for (var i = x[0]; i >= y[0]; i--){
            steps++;
        }
        for (var i = x[1]; i <= y[1]; i++){
            steps++;
        }
    } else if (x[0] <= y[0] && x[1] >= y[1]){
        for (var i = x[0]; i <= y[0]; i++){
            steps++;
        }
        for (var i = x[1]; i >= y[1]; i--){
            steps++;
        }
    } else if (x[0] >= y[0] && x[1] >= y[1]){
        for (var i = x[0]; i >= y[0]; i--){
            steps++;
        }
        for (var i = x[1]; i >= y[1]; i--){
            steps++;
        }
    } 
    return steps;
}
console.log(customerToJoe([-25,10],[0,-10]));

var customerA = [-25,10];
var joe = [0,-10];
console.log(customerToJoe(customerA, joe));
*/

function bestParkingSpot(b,c){
    //b,c is location of two customers, should result between both places
    var coordx = Math.round((b[0] + c[0]) / 2);
    var coordy = Math.round((b[1] + c[1]) / 2); 
    var location = [coordx, coordy];
    return location;
}
// console.log(bestParkingSpot([50,0],[-10,-10]));

var customerB = [25,-10];
var customerC = [40,30];
var whereToPark = bestParkingSpot(customerB, customerC);

console.log('Joe, you should park at coordinates ' + whereToPark + '!');