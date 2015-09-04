var PlaylistsView = Backbone.View.extend({

  tagName: 'ul',

  className: 'collection with-header',

  template: _.template('<li class="collection-header"><h4> Playlists</h4></li>'),


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