var collection = {
  2548: {
    album: "Slipery when wet",
    artist: "Bon Jovi",
    tracks: ["Let it Rock", "You give love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "prince",
    tracks: ["1999", "Little Red Crovette"],
  },
  1245: { artist: "Robert Palmer", tracks: [] },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  }
  return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
