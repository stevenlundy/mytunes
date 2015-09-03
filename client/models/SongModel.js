// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    url: '',
    artist: '',
    title: '',
    playCount: 0,
    upvotes: 0,
    downvotes: 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.increment('playCount');
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  increment: function(counter) {
    var newCount = this.get(counter) + 1;
    this.set(counter, newCount);
  },

  remove: function() {
    this.trigger('removeFromQueue', this);
  }
});
