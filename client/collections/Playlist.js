var Playlist = Backbone.Model.extend({

  initialize: function(title, models){
    this.title = title;
    this.tracks = models;
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  }

});