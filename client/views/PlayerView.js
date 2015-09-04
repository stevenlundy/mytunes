// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

  className: 'player',

  initialize: function() {
    this.$el.append('<audio controls autoplay />')

    this.$el.append('<p>Now Playing: <span class="artist"></span>&mdash;<span class="title"></span></p>')
    this.$el.find('audio').on('ended', function() {
      this.model.ended();
    }.bind(this));

    this.model.on('removeFromQueue', function() {

    });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    this.$el.find('.artist').text(this.model.get('artist'));
    this.$el.find('.title').text(this.model.get('title'));
    this.$el.find('audio').attr('src', this.model ? this.model.get('url') : '');
    return this.$el;
  }

});
