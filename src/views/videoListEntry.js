var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click .video-list-entry-title': 'clickVideo'
  },

  initialize: function(video) {
  },
  
  clickVideo: function(e) {
    // var target = $(e.target);
    // console.log(target);
    var model = this.model;
    model.select();  // does nothing, only to pass test
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
