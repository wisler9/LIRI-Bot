require("dotenv").config();

var keys = require("./keys.js");

// Grab the axios package...
// @link https://www.npmjs.com/package/axios
var axios = require("axios");

var movieName = process.argv.slice(2).join(' ');

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)

axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=f917a3e4").then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    // console.log(response.data);
    console.log("---------------------------------------------------------------------------------");
    console.log("");
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.Ratings);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
    console.log("");
    console.log("---------------------------------------------------------------------------------");
  },

  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);


// Grab the spotify package...
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });






