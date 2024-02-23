// let startHours = 53;
// let startMinutes = 25;
// let startSecond = 51;
//
// let endHours = 48;
// let endMinutes = 25;
// let endSecond = 51;
//
// function testTime(startMinutes,startSecond) {
//
// if (startMinutes >= 60 || startMinutes < 0) {
// return startMinutes;
// }
//
// if (startSecond >= 60 || startSecond < 0) {
// return startSecond;
// }
//
// return "No Conditon matched..."
// }
//
//
// function addTime() {
// return (
// console.log(
// ` total Hours => ${startHours} + ${endHours} = `,
// startHours + endHours
// ),
// console.log(
// ` total Minuts => ${startMinutes} + ${endMinutes} = `,
// startMinutes + endMinutes
// ),
// console.log(
// ` total Seconds => ${startSecond} + ${endSecond} = `,
// startSecond + endSecond
// )
// );
// }
//
// function subtrTime() {
// return (
// console.log(
// ` total Hours => ${startHours} - ${endHours} = `,
// startHours - endHours
// ),
// console.log("stratttttttttttttttttt", startHours),
// console.log(
// ` total Minuts => ${startMinutes} - ${endMinutes} = `,
// startHours - endHours
// ),
// console.log("stratttttttttttttttttt", startMinutes),
// console.log("hjhhh", typeof(hrDiff)),
// console.log(
// ` total Seconds => ${startSecond} - ${endSecond} = `,
// startHours - endHours
// )
// );
// }
//
// console.log("Addition");
// addTime();
//
// console.log("Subtraction");
// subtrTime();
//
//
// console.log("----------------------------------------------------");
//
// console.log("test time condition", testTime(-1, 51));
//
//

//   function x() {
//   const sh = 10;
//   const sm = 56;
//   const ss = 22;
//   const eh = 7;
//   const em = 2;
//   const es = 43;
//   let cm = 0;
//   let ch = 0;

//   let secDiff = ss - es;

//   if(secDiff < 0) {
//     secDiff = 60;
//     cm++;
//   }

//   let minDiff = sm - em + cm;

//   if(minDiff < 0) {
//     minDiff -= 60;
//     ch++;
//   }

//   let hrDiff = sh - eh + ch;

//   console.log("hour", hrDiff);
//   console.log("min", minDiff);
//   console.log("sec", secDiff);
// }
// x();

console.log("------------------------sec-------------------");

function secondAddToMinutes() {
  let startH = 23;
  let startM = 24;
  let startS = 160;



  if (startS >= 60) {
    startM += Math.floor(startS / 60);
    startS %= 60;
  }
  if (startM >= 60) {
    startH += Math.floor(startM / 60);
    startM %= 60;
  }

  return (
    console.log(`${startH} " " ${startM} " " ${startS}`),
    console.log(startM), 
    console.log(startS)
  );
}

secondAddToMinutes();

// function minutesAddtoHours() {
//   let startH = 23;
//   let startM = 120;

//   if (startM >= 60) {
//     startH += Math.floor(startM / 60);
//     startM %= 60;
//   }

//   return console.log(startH), console.log(startM);
// }
// console.log("Hoursss---------------------------------------");

// minutesAddtoHours();
