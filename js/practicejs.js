
const tools =[
    {
        "title": "Hammer",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 20
    }, {
    "title": "Drill",
    "quantity": 5,
    "categories": [
        "tool",
        "powered"
    ],
    "price": 100
}, {
    "title": "Mower",
    "quantity": 5,
    "categories": [
        "tool",
        "gas",
        "outdoor"
    ],
    "price": 180
}, {
    "title": "Screwdriver",
    "quantity": 25,
    "categories": [
        "tool"
    ],
    "price": 10

}, {
    "title": "Dremel",
    "quantity": 2,
    "categories": [
        "tool", "awesome", "powered"
    ],
    "price": 75
}

];
// console.log(tools.reduce((acc,tools)=>{return acc+tools.quantity},0));
// let totalInventory =0;
// tools.forEach(tool=>totalInventory += tool.quantity;)
// let mostExpensive = tools.reduce((mE, nextTool)=> {
//     if(nextTool.price>mE.price)return nextTool;
//     else return mE;
// },{price:-1});


// let mostExpensive ={price:-1};
// tools.forEach(tool => {
//     if(tool.price>mostExpensive.price)
//         mostExpensive=tool;
// });
// console.log(mostExpensive);
//
//
//
// let cheapTools=[];
// tools.forEach((tool) =>{
//     if(tool.price <= 100)
//         cheapTools.push(tool);
// });
// console.log(cheapTools)



// let valueTotals=tools.map(tool => {
//     return{
//         title:tool.title,
//             valueOfInventory:
//     }
// })

let valueTotals=tools.map(tool=>{
    return{
        title:tool.title,
        valueOfInventory: tool.quantity* tool.price
    }
});
console.log(valueTotals);