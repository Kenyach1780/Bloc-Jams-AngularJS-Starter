(function() {
    function SongPlayer() {
        var SongPlayer = {};
        
        /**
        * @desc chosen song
        * @type {Object} song
        */
        var currentSong = null;
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
        
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentSong = song;
        };
        
        /**
        * @function playSong
        * @desc Plays new audio file as currentBuzzObject if it not the currently playing song
        * @param {Object} song 
        */
        var playSong = function(song) {
            if (currentBuzzObject !== song) {
                currentBuzzObject.play();
                song.playing = true;
            }
        };
        
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };
            
            return SongPlayer;
        };              
 
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();