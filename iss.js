/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');
const { isBuffer } = require('util');
const fetchMyIP = function(callback) {
  request('https://api.ipify.orkg/?format=json', (err, resp, body) => {
    if (err) {
      callback(err, null);
    } else if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      callback(null, JSON.parse(body).ip);
    }
  });
};

const fetchCoordsByIP = (ip, cb) => {
  request(`https://api.ipbase.com/v2/info?apikey=4HR4YD5gvQmsQJFI32x86BmHklxPxiC7XZuUJRIZ&ip=${ip}`, (err, resp, body) => {
    if(err) {
      cb(err, null);
      return;
    } else if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching coordinates for IP. Response: ${JSON.parse(body).message}`;
      cb(Error(msg), null);
      return;
    } else {
      const payload = JSON.parse(body);
      const coords = { 
        latitude: payload.data.location.latitude,
        longitude: payload.data.location.longitude
      };
      cb(null, coords);
    }
  }
)};

module.exports = { fetchMyIP, fetchCoordsByIP };