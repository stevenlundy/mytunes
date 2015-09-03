// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('playlists', new Playlists());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);


    var songQueue = this.get('songQueue');

    params.library.on('enqueue', function(song) {
      songQueue.enqueue(song);
    });

    songQueue.on('remove', function() {
      if(songQueue.length === 0){
        this.set('currentSong', new SongModel());
      }
    }, this);

    var playlists = this.get('playlists');

    playlists.on('enqueue', function(playlist) {
      songQueue.addPlaylist(playlist);
    });

    playlists.on('play', function(playlist) {
      songQueue.playPlaylist(playlist);
    });

    songQueue.on('savePlaylist', function(playlist){
      debugger;
      var duplicate = playlists.findWhere({title: playlist.playlistTitle});
      if (duplicate) {
        playlists.remove(duplicate);
      }
      playlists.add(new Playlist(playlist.playlistTitle, playlist.models)); 
    });
  }

});
