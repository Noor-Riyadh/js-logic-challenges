// 3) Gym Membership Calculator
// Calculate membership cost:
// - Monthly = 350 EGP
// - Enter number of months
// - Discount: 6+ months (10%), 12+ months (15%)
// - Add personal training for 200 EGP
// - Add 14% VAT
// Example: 6 months-> 6x350=2100->-10% =1890-> PT +200=2090 -> VAT=2382.6

document.writeln("Welcome to our Gym <br>");

let membership_cost = 350;
let membership_user = 0;
let no_of_months = +prompt("Enter number of months");

membership_user = no_of_months * membership_cost;
document.writeln(
  "Your original price before any discounts " + membership_user + "<br>",
);

// Apply discount
if (no_of_months >= 12) {
  membership_user -= (15 / 100) * membership_user;
  document.writeln(
    "After applying the 12 month discount 😀 " + membership_user + "<br>",
  );
} else if (no_of_months >= 6) {
  membership_user -= (10 / 100) * membership_user;
  document.writeln(
    "After applying the 6 month discount 😀 " + membership_user + "<br>",
  );
} else {
  document.writeln(
    "You will not get any discount and you have to pay " +
      membership_user +
      "<br>",
  );
}

// Personal training
let q1 = confirm("Do you want to add a personal training for 200 EGP");
if (q1) {
  membership_user += 200;
  document.writeln("So now you have to pay " + membership_user + "<br>");
} else {
  document.writeln(
    "So now you will pay " + membership_user + " no change <br>",
  );
}

// VAT
let valueAdded = (14 / 100) * membership_user;
let totalPaid = membership_user + valueAdded;

document.writeln(
  "Now in total you have to pay " + totalPaid + " after adding the 14% VAT",
);
