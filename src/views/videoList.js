var VideoListView = Backbone.View.extend({
  
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());  
    this.$el.find('div').empty(); 
    this.$el.find('.video-list').append(this.collection.map(function(video) {
      console.log(video);
      var newVid = new VideoListEntryView({model: video});
      return newVid.render();
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
