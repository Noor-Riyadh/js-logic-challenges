// Task
// 1- الولد بيورث ضعف البنت
// 2- الزوجة 1/8

// ما هي قيمة الميراث
// هل الزوجة حية ؟
// عدد الأولاد
// عدد البنات

// نصيب الزوجة
// نصيب الولد
// نصيب البنت

let almeraz = +prompt(" ما هي قيمة الميراث ");
let q2 = confirm(" هل الزوجة حية ؟");
let wifeshare = 0;

if (q2 === true) {
  wifeshare = (1 / 8) * almeraz;
} else {
  wifeshare = 0;
}

let remaining = almeraz - wifeshare;

let boysnumber = +prompt("عدد الأولاد");
let girlsnumber = +prompt("عدد البنات");

let totalParts = boysnumber * 2 + girlsnumber * 1;

let girlsshare = remaining / totalParts;
let boyshare = girlsshare * 2;

// Output the results
console.log("نصيب الزوجة: " + wifeshare);
console.log("نصيب الولد الواحد: " + boyshare);
console.log("نصيب البنت الواحدة: " + girlsshare);
