var Playlist = Songs.extend({


  enqueue: function() {
    this.trigger('enqueue', this);
  }

});