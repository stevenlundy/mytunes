// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'li',

  className: 'song collection-item',

  template: _.template('<span><%= title %></span>&mdash;<span><%= artist  %></span><span class="secondary-content"><i class="removeFromQueue material-icons">delete</i></span>'),

  events: {
    'click .removeFromQueue': function() {
      this.model.remove();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
