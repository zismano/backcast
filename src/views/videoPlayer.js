var VideoPlayerView = Backbone.View.extend({
 
  initalize: function(){
    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
   // console.log(this, "HH");
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
