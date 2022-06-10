const { nextISSTimesForMyLocation } = require('./iss_promised');

const times = nextISSTimesForMyLocation()
.then((times) => {
  for (let time of times) {
    console.log(`Next pass at ${Date(time.risetime)} for ${time.duration} seconds`);
  };
})
.catch(error => {
  console.log("Error: ", error.message);
});



