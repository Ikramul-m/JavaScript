var myObject = {
  gift: "pony",
  pet: "kitchen",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObject.hasOwnProperty(checkProp)) {
    return checkProp;
  } else {
    return "who?????";
  }
}

console.log(checkObj("lol"));


