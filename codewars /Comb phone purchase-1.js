const phone = 300;
const tax = 0.08;
const accessories = 50;
const maxSpend = 1500;

function eachPhone () {
    return (phone + accessories)*tax + phone + accessories;
}

console.log(eachPhone())

function dollarSign() {
   return '$' + eachPhone().toFixed();
}

console.log(dollarSign())