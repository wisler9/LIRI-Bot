require("dotenv").config();

var keys = require("./keys.js");

// Grab the axios package...
// @link https://www.npmjs.com/package/axios
var axios = require("axios");



// switch (key) {
//   case concert-this:
    
//     break;

//   default:
//     break;
// }










var movieThis = function() {
  var movieName = process.argv.slice(3).join(' ');

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)

axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=f917a3e4").then(
  function(response) {

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
}

var spotifyThisSong = function(){
var songName = process.argv.slice(3).join(' ');;
if(songName === "") {
  songName = "The Sign";
};

// Grab the spotify package...
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
spotify
  // .request('https://api.spotify.com/v1/track/7yCPwWs66K8Ba5lFuU2bcx')
  .search({ type: 'track', query: songName })
  .then(function(data) {
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].album.name);
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].external_urls);
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}

var concertThis = function(artist) {
  var getEvents = artist;
}

axios.get("https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp").then(
  function(response) {

    console.log(response.data);
    
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


  

