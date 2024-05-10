// Your code here
const menu = {
    taco: 5.55,
    salad: 3.89,
    beans: 5.99,
    pizza: 6.50,
    order: function(orderPlaced) {
        const orderSplit = orderPlaced.split(' ');
        let sum = 0;

        for (const item of orderSplit) {
            sum += this[item];
     }

     console.log(`Your total is ${sum.toFixed(2)}`);
   }
}
menu.order('taco, salad, pizza');
// menu.order('pizza pizza pizza');