// 9) Currency Exchange
// Currency exchange:
// - Enter USD amount
// - Rate: 1 USD = 48 EGP
// - Apply 3% commission
// Example: 200 USD → 200×48=9600 → -3% commission=9312

let amount = +prompt("Enter the amount you want to exchange in USD ");
let Usd = 48;
let price = amount * Usd;
document.writeln(
  "Your " + amount + " is equivalent to  " + price + "  in EGP <br>",
);
let commission = (3 / 100) * price;
document.writeln("You have commission 3 % which is  " + commission + "  <br>");
price -= commission;
document.writeln(
  "You amount now after subtracting the commission is   " + price + "  <br>",
);

