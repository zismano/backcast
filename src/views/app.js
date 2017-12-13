var AppView = Backbone.View.extend({

  el: '#app',
  videos: [],

  initialize: function(dataSource) {
    var dataSource = dataSource || exampleVideoData;
    this.render(dataSource);
    
  //  console.log(window.exampleVideoData)
  },


  render: function(dataSource) {
    this.$el.html(this.template());
    var videoCollection = new Videos(dataSource);
    var model = new VideoListView({el: '.list', collection: videoCollection}).render();
//collection.render();
    new SearchView({el: '.search'}).render();
    new VideoPlayerView({el: '.player', model: model.collection.models[0]}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
