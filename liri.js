require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
var fs = require("fs");
var axios = require("axios");

var search = process.argv[2];
var artist = process.argv.slice(3).join(" ");
var songName = process.argv.slice(3).join(" ");
var movieName = process.argv.slice(3).join(" ");




// Conditional statements checking for user search.
if (search === "movie-this") {
  movieThis(movieName);
} else if (search === "spotify-this-song") {
  spotifyThisSong(songName);
} else if (search === "do-what-it-says") {
  var data = 0;
  doWhatItSays(data);
} else if (search === "concert-this") {
  concertThis(artist);
}

// This will take what is output to the terminal and saves to the log.txt file.
function logToFile(data) {
  fs.appendFile("log.txt", "\n" + data, function(err) {
    if (err) {
      console.log(err);
    }
  });
}


function movieThis(movieName) {
  axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=f917a3e4").then(
  function(response) {

    // console.log(response.data);
    console.log("---------------------------------------------------------------------------------");
    console.log("");
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.Ratings[0].Source);
    console.log(response.data.Ratings[0].Value);
    console.log(response.data.Ratings[1].Source);
    console.log(response.data.Ratings[1].Value);
    // console.log(response.data.Ratings);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
    console.log("");
    console.log("---------------------------------------------------------------------------------");
  },

  function(error) {
    if (error.response) {
      
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);
}

function spotifyThisSong(songName){

  if(songName === "") {
  songName = "The Sign";
};

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

spotify
  // .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  spotify.search({ type: 'track', query: songName })
  .then(function(data) {
    // console.log(data.tracks.items[0]);
    console.log(" ");
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("URL: " + data.tracks.items[0].external_urls.spotify);
    console.log(" ");
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err);
  });
}

function concertThis(artist) {
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
// axios.get("https://rest.bandsintown.com/artists/" + "Celine Dion" + "/events?app_id=codingbootcamp")

  .then(
    function(response) {
     
      // console.log(`----------->`,response.data);
      // console.log(response);
      // console.log(response.data[0]);
      console.log(" ");
      console.log("Artist: " + response.data[0].lineup[0]);
      console.log("Venue Name: " + response.data[0].venue.name);
      console.log("State: " + response.data[0].venue.region);
      console.log("City: " + response.data[0].venue.city);
      console.log("Time: " + response.data[0].datetime);
      console.log(" ");

    }, 
      // var fDate = response.data[events].datetime;
      // var forDate = moment(fDate).format("MM/DD/YYYY");
      // console.log(forDate);
      function(error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          }
        );
};

function doWhatItSays(){
    fs.readFile("random.txt","utf8",function(error,data){
        if (error){
            console.log(error);
        }
        var dataArr = data.split(",");
        var command = dataArr[0];
        var input = dataArr[1];

        if (command === "concert-this"){
            concertThis(input);
        } else if (command === "spotify-this-song"){
            spotifyThisSong(input);
        } else if (command === "movie-this"){
            movieThis(input);
        } else{
            console.log("Command is wrong, check your random.txt file");
        }
        
    })
}