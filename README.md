# LIRI-Bot

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies


To use Liri, you're able to give it 4 types of commands

* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`


## concert-this 

Will let you search the Bands in Town Artist Events API.

![screenshot](/image/concertThis.png)   




## spotify-this-song

This will search the [node-spotify-api] package to retrieve song information from spotify API.

![screenshot](/image/spotifyThisSong.png)



## movie-this

This will search the OMDB API for movies

![screenshot](/image/movieThis.png)




## do-what-it-says

This will take the text inside of `random.txt` using fs package and then use it to call the liri commands.

![screenshot](/image/doWhatItSays.png)
