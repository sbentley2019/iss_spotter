const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (let i of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(i.risetime);
    console.log(`Next pass at ${dateTime} for ${i.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work.");
    return;
  }

  printPassTimes(passTimes);
});