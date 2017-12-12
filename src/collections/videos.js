var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {  

    this.forEach(function(video) {
      new Video({model: video});
    });
    
  }
});
