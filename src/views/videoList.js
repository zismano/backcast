var VideoListView = Backbone.View.extend({
  
  
  initialize: function() {
    // this.render();
   // this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template()); 
    console.log(this.$el, '????');
    // this.$el.find('.video-list').append(this.collection.map(function(video) {
    //   console.log(video);
    //   var newVid = new VideoListEntryView({model: video});
    //   return newVid.render()
    // }));
    // console.log(this.$el);
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
