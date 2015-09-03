// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('dequeue', function(song) {
      this.dequeue(song);
    }, this);

    this.on('ended', function(song) {
      song.dequeue();
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst()
      }
    });

    this.on('removeFromQueue', function(song) {
      if (this.indexOf(song) === 0) {
        this.remove(song);
        if(this.length > 0){
          this.playFirst();
        }
      } else {
        this.remove(song);
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
  },

  removeAll: function() {

  }
});