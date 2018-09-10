// Create a file named promises.js inside of your js directory.
//
//     Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// Generate a Personal Access Token for the github api.
//
//     We will use this so that we don't get rate limited when talking to the github api. You can add the token to your requests like this:
//
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
"use strict";
"use strict";

// let wait = num =>{
//     let promise = new Promise((resolve, reject) => {});
//
//     setTimeout(() => {
//         promise.resolve();
//
//         wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//         wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//
//     },num)};
//
// console.log(wait);




function wait(num){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// function getLastCommit () {
//     fetch('GET /users/:username/events/public', {headers: {'Authorization': '21088f6ecf7e9d375e69c9251e6d3f8795eb5152'}})
//         .then(response => response.json())
//         // .then((users) => console.log(users.map(user => user.created_at)))
//         .then((users) => console.log(users[0].created_at))
//         .catch(error => console.log(error))
// }
// getLastCommit();

const lastPushToGithub = (username) => {
    return fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token d7cc4635712ac9c52005134300e56e338b36b738'}})
};
lastPushToGithub('tylor-pelletier')
    .then(response => response.json())
    .then(events => events.filter(event => event.type === "PushEvent"))
    .then(data => console.log(data["0"].created_at))
    .catch(error => console.error(error));