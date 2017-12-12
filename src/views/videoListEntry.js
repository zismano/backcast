var VideoListEntryView = Backbone.View.extend({
  
  // initialize: function() {
  // //  $('.video-list-entry-title').on('click', Video.select);
  // }
  
  render: function() {
  //  console.log('hi');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
