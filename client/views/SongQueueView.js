// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<tr><th>Song Queue</th><th><button class="clearQueue">Clear</button></th></tr>\
                        <tr><td><input type="text" class="playlistTitle" /></td><td><button class="savePlaylist">Save</button></td></tr>'),

  initialize: function() {

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);

    this.render();
  },
  events: {
    'click button.clearQueue': function() {
      this.collection.removeAll();
    },
    'click button.savePlaylist': function(){
      debugger;
      this.collection.savePlaylist(this.$el.find('.playlistTitle').val());
    }
  },
  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html(this.template(this.collection.attributes)).append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
