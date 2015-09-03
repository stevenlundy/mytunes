// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button class="removeFromQueue">-</button></td>'),

  events: {
    'click button.removeFromQueue': function() {
      this.model.remove();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
