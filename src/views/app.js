var AppView = Backbone.View.extend({

  el: '#app',
  videos: [],

  initialize: function() {
    this.render();
    
  //  console.log(window.exampleVideoData)
  },


  render: function() {
    this.$el.html(this.template());
    var videoCollection = new Videos(exampleVideoData);
    var model = new VideoListView({el: '.list', collection: videoCollection}).render();
    console.log(model.collection.models[0])
//collection.render();
    new SearchView({el: '.search'}).render();
    new VideoPlayerView({el: '.player', model: model.collection.models[0]}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
