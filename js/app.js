'use strict';
console.log('this is working');


//global vars go here
var userPoints = 0;


//Greeting
alert('Hello, and welcome to my guess game');
var user = prompt('what is your name?');
// the user variable
// - string
// - null
// - '' empty
// if the user is empty string or null, keep asking them for their name
//while (user === '' || user === null)
//short version
// while(!user) {
//     user = prompt('what is your name, give it to us now!')
// }
// var userName = user.toLowerCase();
// console.log("username is " + userName)




// Control Flow in JS

// if(condition) {...}
// if(condition) {...}else{...}
// if(condition) {...}else if (condition 2){...}else{...}

//this is the not equals comarison
// if (userName !== 'bob') {
//     alert('you are not the bob we are looking for');
// }

// alert('Hello, ' + user + '! It is nice that you stopped by.');


// var ans = prompt('is my favorite food popcorn?', 'Type yes or no' ).toLowerCase();
// console.log(ans);

//check to see if answer is correct
// if(ans === 'no' || answer === 'n') {
//     userPoints++;
// } else {
//     alert('You are incorrect!')
// }
// alert('you have ' + userPoints + ' points');


//loop wil loop until conditions turns truthy or not-truthy
// while(condition){condition has to change to stop}

// do {..this runs no matter what} while(condition);

// for( setup; condition; change variable)
// for(var i = 0, i < someArray.length; i++){
//     code block
// }
// var i = 0
// while (i < value) {
//     ...
//     i++;
// }


//array
var foodsILike = ['bacon', 'steak', 'chocolate', 'chips'];
console.log(foodsILike);
console.log(foodsILike.length);

for(var i = 0; i < foodsILike.length; i++) {
    console.log(foodsILike[i]);
}

/*
multi line comment
do more looping!
- continue = means skip the rest of the iterations and go back to begining
*/
for(var i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('Keeping going past this number 2')
        continue;
    }
    if( i=== 4) {
        console.log('this is now breaking the loops');
        break;
    }
    console.log('the variable I = ' + i);
}

//falsy values are: 0, null, Nan, '', undefined, false
//truthy values are: everything else