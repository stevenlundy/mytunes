var PlaylistsView = Backbone.View.extend({

  tagName: 'table',

  template: _.template('<tr><th>Playlists</th></tr>'),


  initialize: function() {
    this.$el.html(this.template());

    this.collection.on('add', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.find('.playlist').detach();
    this.$el.append(this.collection.map(function(playlist) {
      return new PlaylistsEntryView({model:playlist}).render();
    }));
  }

});