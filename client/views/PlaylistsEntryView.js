var PlaylistsEntryView = Backbone.View.extend({

  tagName: 'tr',

  className: 'playlist',

  template: _.template('<td><%= title %></td> \
                        <td><button class="playPlaylist">Play</button></td> \
                        <td><button class="queuePlaylist">Queue</button></td>'),

  events: {
    'click button.playPlaylist': function() {
      this.model.play();
    },
    'click button.queuePlaylist': function() {
      this.model.enqueue();
    }
  },

  initialize: function() {

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});