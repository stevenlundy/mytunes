var PlaylistsView = Backbone.View.extend({

  tagName: 'table',

  template: _.template('<tr><th>Playlists</th></tr>'),


  initialize: function() {
    this.$el.html(this.template());
  },

  render: function() {
    this.$el.find('.playlist').detach();
    this.$el.append(this.collection.map(function(playlist) {
      return new PlaylistsEntryView({model:playlist}).render();
    }));
  }

});