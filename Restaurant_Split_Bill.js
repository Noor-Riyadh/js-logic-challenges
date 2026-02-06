// 12) Restaurant Split Bill
// Split restaurant bill:
// - Enter total bill
// - Add 12% service charge
// - Add 14% VAT
// - Divide by number of people
// Example: Bill=600, 3 people → Service +12%=672 → VAT=766.08 → Each=255.36

let total = +prompt("Enter the total bill ");
let service_charge = (12 / 100) * total;

document.writeln(
  "Your service charge 12 % is equivalent to  " + service_charge + " <br>",
);
total += service_charge;
document.writeln(" total after adding 12 %  is " + total + " <br>");
document.writeln("Your VAt 14 % is equivalent to  " + service_charge + " <br>");

let Vat = (14 / 100) * total;
total += Vat;
document.writeln("Your total Now after adding 14 % is " + total + " <br>");

let no_people = +prompt("Enter the total nunmber of people ");
total /= no_people;
document.writeln("Each one will pay " + total + " <br>");
