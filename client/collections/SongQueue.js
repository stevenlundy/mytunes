// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('dequeue', function(song) {
      this.dequeue(song);
    }, this);

    this.on('ended', function(song) {
      debugger;
      song.dequeue();
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

  },

  enqueue: function(song) {
    this.push(song);
  },

  dequeue: function(song) {
    this.shift();
  },

  playFirst: function() {
    var nextSong = this.first();
    nextSong.play();
  }

});