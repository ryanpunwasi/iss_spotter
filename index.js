const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require("./iss");
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("174.89.152.46d", (error, data) => {
//   if (error) {
//     console.log("Uh oh!" , error.message);
//     return;
//   } else {
//     console.log('Success! Returned coordinates:' , data);
//   }
// });