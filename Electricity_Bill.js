// 5) Electricity Bill
// Calculate electricity cost:
// - First 100 kWh at 0.75, rest at 1.20
// - Optional service fee 5 EGP
// - Add 14% VAT
// Example: 120 kWh → (100×0.75)+(20×1.2)=99 → Service +5=104 → VAT=118.56

let cost = +prompt("Enter electricity cost ");
let total = 0;
if (cost > 100) {
  let remain = cost % 100;
  remain *= 1.2;
  let first = 100 * 0.75;
  total = remain + first;
  document.writeln(
    "First 100 KWh * 0.75 will cost " +
      first +
      " and the remaining will cost " +
      remain +
      " <br>",
  );
} else {
  let first = 100 * 0.75;
  total = remain + first;
  document.writeln("First 100 KWh * 0.75 will cost " + first + " <br>");
}

let isService = confirm("Do you need extra optional service fee for 5 EGP ?");
if (isService) {
  total += 5;
  document.writeln("Your total is " + total + " <br>");
}

let VAt = (14 / 100) * total;
total += VAt;
document.writeln("Your total is now" + total + " <br>");
