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
