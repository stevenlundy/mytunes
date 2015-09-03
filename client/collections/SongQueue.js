// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.playlistTitle = '';

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
      if (this.first() === song) {
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
    this.add(song);
  },

  dequeue: function(song) {
    this.shift();
  },

  playFirst: function() {
    var nextSong = this.first();
    nextSong.play();
  },

  removeAll: function() {
    this.remove(this.models);
    this.setPlaylistTitle('');
  },

  playPlaylist: function(playlist) {
    this.removeAll();
    this.add(playlist.get('tracks'));
    this.setPlaylistTitle(playlist.get('title'));
  }, 

  addPlaylist: function(playlist) {
    this.add(playlist.get('tracks'));
  },

  savePlaylist: function(playlistTitle) {
    this.setPlaylistTitle(playlistTitle);
    this.trigger('savePlaylist', this);
  },

  setPlaylistTitle: function(title) {
    this.playlistTitle = title;
    this.trigger('titleChange', this);
  }

});