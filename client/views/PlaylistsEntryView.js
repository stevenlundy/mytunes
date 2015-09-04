var PlaylistsEntryView = Backbone.View.extend({

  tagName: 'li',

  className: 'collection-item playlist',

  template: _.template('<span class="title"><%= title  %></span> \
                        <div class="secondary-content"> \
                          <i class="playPlaylist material-icons">play_circle_filled</i> \
                          <i class="queuePlaylist material-icons">queue</i> \
                        </div>'),

  events: {
    'click .playPlaylist': function() {
      this.model.play();
    },
    'click .queuePlaylist': function() {
      this.model.enqueue();
    }
  },

  initialize: function() {

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});