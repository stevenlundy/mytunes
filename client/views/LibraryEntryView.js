// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({



  tagName: 'li',

  className: 'collection-item avatar',

  template: _.template('<img src="<%= img %>" class="circle responsive-img"> \
                        <span class="title"><%= title %></span> \
                        <p class="artist"><%= artist %></p> \
                        <span class="secondary-content"> \
                          <span>Plays: <%= playCount %></span> \
                          <a href="#!" class="upvote green-text"><i class="material-icons">thumb_up</i> <%= upvotes %></a> \
                          <a href="#!" class="downvote red-text"><i class="material-icons">thumb_down</i> <%= downvotes %></a> \
                        </span>'),

  events: {
    'click .title': function() {
      this.model.enqueue();
    },

    'click .upvote': function() {
      this.model.increment('upvotes')
    },

    'click .downvote': function() {
      this.model.increment('downvotes');
    }

  },

  initialize: function(){
    this.model.on('change', function(){
      this.render();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
