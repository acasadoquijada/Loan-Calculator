export function calculateTotal(amount, numberOfPayments){

    let totalAmount;

    if(amount <= 1000) {
        totalAmount = amount * .25;
    } else if (amount > 1000 && amount <= 5000) {
        totalAmount = amount * .20;
    } else if (amount > 5000 && amount <= 10000) {
        totalAmount = amount * .15;
    } else {
        totalAmount = amount * .10;
    }

    let totalNumberOfPayments;

    switch(numberOfPayments) {
        case "3":
            totalNumberOfPayments = amount *0.5;
            break;
        case "6":
            totalNumberOfPayments = amount *0.10;
            break;
        case "12":
            totalNumberOfPayments = amount *0.15;
            break;
        case "24":
            totalNumberOfPayments = amount *0.20;
            break;
        default:
            break;
    }
    
    return totalAmount + totalNumberOfPayments + amount;
}