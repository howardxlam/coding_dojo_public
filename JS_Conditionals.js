/*
function whatsMyReward(time, ampm, day){
    day = day.toLowerCase();
    if (ampm == 'pm'){
        time = time + 12;
    }
    if (time <= 10){
        return 'A latte';
    } else if (time <= 16){
        return 'A hot chocolate';
    } else if (time <= 22){
        if (day == 'wednesday' || day == 'wed'){
            return 'Strawberry Ice Cream'
        } else {
        return 'Vanilla Ice cream';
        }
    } else {
        return 'Sleep!';
    }
}
*/

/*
function whatsMyReward(time, ampm, day){
    day = day.toLowerCase();
    if (ampm == 'pm'){
        time = time + 12;
    }
    if (time <= 10){
        return 'A latte';
    } else if (time <= 15){
        return 'A hot chocolate';
    } else if (time <= 18){
        if (time % 2 !== 0){
            if (day == 'wednesday' || day == 'wed'){
                return 'Strawberry Ice Cream'
            } else {
            return 'Vanilla Ice Cream';
            }
        } else {
            return 'A hot chocolate';
        }
    } else if (time <= 22){
        if (day == 'wednesday' || day == 'wed'){
            return 'Strawberry Ice Cream'
        } else {
        return 'Vanilla Ice Cream';
        }
    } else {
        return 'Sleep!';
    }
}
*/

function whatsMyReward(time, ampm, day){
    day = day.toLowerCase();
    if (ampm == 'pm'){
        time = time + 12;
    }
    if (time < 5){
        return 'A little bit of sleep';
    } else if (time <= 10){
        return 'A latte';
    } else if (time <= 15){
        return 'A hot chocolate';
    } else if (time <= 18){
        var random = Math.floor(Math.random() * 3 +1);
        //console.log(random);
        if (time % 2 !== 0){
            //ice cream, cookies, or candy
            if (random == 1){
                return 'Cookies';
            } else if (random == 2){
                return 'Candy';
            } else if (random == 3){
                if (day == 'wednesday' || day == 'wed'){
                    return 'Strawberry Ice Cream'
                } else {
                    return 'Vanilla Ice Cream';
                }
            }
        } else {
            //hot chocolate, tea, or cake
            if (random == 1){
                return 'A hot chocolate';
            } else if (random == 2){
                return 'A cup of tea';
            } else if (random == 3){
                return 'A piece of cake';
            }
        }
    } else if (time <= 22) {
        if (day == 'wednesday' || day == 'wed'){
            return 'Strawberry Ice Cream'
        } else {
        return 'Vanilla Ice Cream';
        }
    } else {
        return 'Sleep!';
    }
}
//enter time, am or pm, and day of week
console.log(whatsMyReward(1, 'am', 'Fri'));
