var Video = Backbone.Model.extend({

  //snippet: {},

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
 //   this.set('snippet', this.attributes.snippet);

  },
  select: function() {
    this.trigger('select', this);
  }
});
