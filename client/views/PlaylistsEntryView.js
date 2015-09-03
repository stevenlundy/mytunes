var PlaylistsEntryView = Backbone.View.extend({

  tagName: 'tr',

  className: 'playlist',

  template: _.template('<td><%= title &></td>'),


  initialize: function() {

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});