var Playlist = Backbone.Model.extend({

  initialize: function(title, models){
    this.set('title', title);
    this.set('tracks', models.slice());
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  play: function() {
    this.trigger('play', this);
  }

});