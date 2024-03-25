// var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// const { x: a, y: b, z: c } = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tommorow: 79,
  dayAfterTommorow: 80,
};

function getTempOfTmrw(avgTeamperatures) {
  "use strict";
  const { dayAfterTommorow: tempOfTommorow } = avgTeamperatures;
  return tempOfTommorow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
