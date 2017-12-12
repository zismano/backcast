var VideoListEntryView = Backbone.View.extend({
  
  // initialize: function() {
  // //  $('.video-list-entry-title').on('click', Video.select);
  // }
  
  render: function() {
  //  console.log('hi');
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').text(this.model.snippet.title);
    this.$el.find('.video-list-entry-detail').text(this.model.snippet.description);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
