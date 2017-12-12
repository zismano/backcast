var VideoPlayerView = Backbone.View.extend({


  render: function() {
    console.log(this, 'KKK');
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
   // console.log(this, "HH");
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
