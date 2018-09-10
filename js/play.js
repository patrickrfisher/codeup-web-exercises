let dogs = [
    {
        name:"Bruno",
        age: 5,
        breed:"Mutt",
        bark: function () {
            console.log("grrroowoveuuu!!")

        }
    },
    {
        name:"Daisy",
        age: 3,
        breed:"Beagle",
        bark: function () {
            console.log("YupYup!!")

        }
    },
    {
        name:"JC",
        age: 4,
        breed:"JunkYard Cat",
        bark: function () {
            console.log("RaRaa!")

        }
    },

];
let fourOrOlder=dogs.filter(dogs=> dogs.age >4);
console.log(fourOrOlder);

