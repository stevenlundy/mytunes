var Playlist = Backbone.Model.extend({

  initialize: function(title, models){
    this.set('title', title);
    this.set('tracks', models);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  }

});