// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
    

// function acceptArrays(numbers){
//   for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//       countPositives++ ;;
//     }
//   }
//   console.log("there are " + countPositives + " positive values");
// }



var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
var newArr = [];
    
function acceptArrays(number){
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            countPositives++;
            newArr.push(numbers[i]);
        }
    }
    console.log(newArr);
    // return newArr;
}

acceptArrays(numbers);