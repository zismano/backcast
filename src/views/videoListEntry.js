var VideoListEntryView = Backbone.View.extend({
  
  events : {
    'click .video-list-entry-title': 'clickVideo'
  },

  initialize: function(video) {
    // $('.video-list-entry-title').on('click', function(e) {
    //   console.log(e.target);
    // });
  },
  
  clickVideo : function(e) {
   // debugger;
   // var vid = $(e.target);
   new VideoPlayerView({el: '.player', model: this.model}).render();
  },
    
  render: function() {
  //  console.log(this.model.attributes, "HHH");
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

// var template = '<div class="video-list-entry-title">title</div>
//     <div class="video-list-entry-detail">Video Description</div>
