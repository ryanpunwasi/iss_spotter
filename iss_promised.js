const request = require('request-promise-native');
const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://api.ipbase.com/v2/info?apikey=4HR4YD5gvQmsQJFI32x86BmHklxPxiC7XZuUJRIZ&ip=${ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  let { latitude, longitude } = JSON.parse(body).data.location;
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(data => {
    return JSON.parse(data).response;
  });
};

module.exports = { nextISSTimesForMyLocation };