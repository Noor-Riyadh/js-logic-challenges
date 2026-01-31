// 4) Simple Checkout
// Simulate online checkout:
// - Enter item price x quantity
// - Free shipping if subtotal >= 1000 EGP, otherwise 60 EGP
// - Apply coupon % discount if available
// - Add 14% VAT
// Example: Price=250 x4=1000 -> Free shipping -> Coupon 10% -> 900 -> VAT=1026

document.writeln("Welcome to our online checkout <br>");
let item_price = +prompt("Enter the item price");
let item_quantity = +prompt("Enter the item Qualtity");
let subtotal = item_price * item_quantity;
document.writeln(" Your Subtotal is " + subtotal + "<br>");
// Shippping
let shipping = 60;
if (subtotal >= 1000) {
  shipping = 0;
  document.writeln(" You got Free Shipping <br>");
} else {
  document.writeln("Shipping cost will be added later <br>");
}
//Coupon
let iscouponfound = confirm(" Do you have any coupons ");
if (iscouponfound) {
  let coupon = +prompt("Enter your coupon value");
  let discount = (coupon / 100) * subtotal;
  subtotal -= discount;
  document.writeln(
    "You get " +
      coupon +
      " % discount and your total now is " +
      subtotal +
      "<br>",
  );
}
// Add Shipping
subtotal += shipping;
// VAT
let valueAdded = (14 / 100) * subtotal;
subtotal += valueAdded;
document.writeln(
  " In total you have to pay " + subtotal + "after adding 14 % VAT <br>",
);
