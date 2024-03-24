function phoneticLookup(val) {
  var result = "";

  var lookup = {
    name: "Ikramul",
    profession: "Software Developer",
    language: "C#",
    age: "24",
    dob: "26/01/2000",
  };

  result = lookup[val];

  return result;
}

console.log(phoneticLookup("name"));
console.log("Is a " + phoneticLookup("profession") + ".");
console.log("Expertise in " + phoneticLookup("language") + ".");
console.log("Is " + phoneticLookup("age") + " years old" + ".");
console.log("Was born in " + phoneticLookup("dob") + ".");
