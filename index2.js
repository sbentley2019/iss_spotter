const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (let i of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(i.risetime);
    console.log(`Next pass at ${dateTime} for ${i.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });