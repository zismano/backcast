var VideoListView = Backbone.View.extend({
  
  
  initialize: function() {
    // this.render();
   // this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    console.log(this.$el);
    this.$el.html(this.template());  
    this.$el.find('div').empty(); 
    this.$el.find('.video-list').append(window.exampleVideoData.map(function(video) {
      console.log(video);
      var newVid = new VideoListEntryView({model: video});
      return newVid.render();
    }));
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
