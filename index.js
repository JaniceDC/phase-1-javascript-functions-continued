// Your code here
// function saturdayFun() {
//     console.log("This Saturday, I want to ace my JavaScript!");
// }
// saturdayFun();

function saturdayFun(activity="JavaScript") {
    console.log(`This Saturday, I want to ace my ${activity}`);
}
saturdayFun();

function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday, I want to ${activity}`);
}
saturdayFun();

function saturdayFun (activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function (place = "go to the office") {
    return `This Monday, I will ${place}.`
}

// function wrapAdjective(visualFlair = "*") {
//     return function inner (word = "special" ) {
//         return `You are ${visualFlair} ${word}`
//     }
// }
function wrapAdjective(string='*') {
    const innerFunction = function(singleParameter="special") {
        return `You are ${string}${singleParameter}${string}!`
    }
    return innerFunction
}