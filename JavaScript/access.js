var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
  gun: [" AKM ", " DP ", " Kar-98 ", " UMP ", " Thompson ", " AWM "],
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log("My hat is " + hatValue);
console.log("My shirt is " + shirtValue);
console.log("Weapons I have are:   " + testObj.gun);

testObj["graned"] = "dynamide";

console.log(testObj);
delete testObj["hat"];

console.log(testObj);
