// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "ul",

  className: 'collection with-header',

  template: _.template('<li class="collection-header"><h4>Song Queue<i class="small material-icons clearQueue secondary-content">clear_all</i></h4></li>\
                        <li class="collection-item"> \
                          <div class="input-field"> \
                            <input id="playlistTitle" type="text" class="validate playlistTitle" value="<%= playlistTitle %>"> \
                            <label for="playlistTitle">Playlist Title</label> \
                          </div> \
                          <button class="savePlaylist btn waves-effect waves-light">Save</button> \
                        </li>'),

  initialize: function() {
    this.collection.on('add remove', function() {
      this.render();
    }, this);

    this.collection.on('titleChange', function(){
      this.$el.find('.playlistTitle').val(this.collection.playlistTitle);
    }, this);

    this.$el.html(this.template(this.collection));

    this.render();
  },

  events: {
    'click .clearQueue': function() {
      this.collection.removeAll();
    },
    'click button.savePlaylist': function(){
      this.collection.savePlaylist(this.$el.find('.playlistTitle').val());
    }
  },
  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.find(".song").detach();

    this.$el.append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
