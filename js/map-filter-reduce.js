const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// //Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.-----
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

console.log(users.filter(user => user.languages.length>=3));
// Use .map to create an array of strings where each element is a user's email address

console.log(users.map(user=>user.email));
// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
console.log(users.reduce((accumulator,user)=>{return accumulator+user.yearsOfExperience/users.length},0));
// Use reduce to get the longest email from the list of users.
// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let threeOrMore=users.filter(user=> user.languages.length>=3);
console.log(threeOrMore);
let usersEmail=users.map(user => user.email);
console.log(usersEmail);
// let totalYears=users.reduce(user => user.yearsOfExperience);
// console.log(totalYears);
const averageYears=users.reduce((accumulator,user)=>accumulator+user.yearsOfExperience/users.length
,0);
console.log(averageYears);
const longestEmails=users.reduce((accumulator,user)=>{if(user.email.length > accumulator){accumulator=user.email.length;}return accumulator},0);
console.log(longestEmails);


// const longestEmail=usersEmail.reduce((accumulator,user)=>
//
// {if(user.length > accumulator.length)return user;
// else return accumulator;},0);
// console.log(longestEmail);
//
const newObj = users.reduce((accumulator, user) => {
    accumulator[users] = user;
    return accumulator}, {});
console.log(newObj);


//
// console.log(users.reduce(message, user,i)=> {
//     if (i<users.length-1)
//         return `${message} ${user.name},`
//     else return `${message} and ${user.name},`
// },"Your instructors are: ")
console.log(users.reduce((message,user,i) => {
    if (i < users.length-1)
        return `${message} ${user.name},`;
    else return `${message} and ${user.name}.`
},"Your instructors are: "));