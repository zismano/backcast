var SearchView = Backbone.View.extend({
  
  events: {
    'click .btn': 'selectHandler',
    'keyup': 'processKey'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  selectHandler: function() {
    var searchVid = new Videos();  
    searchVid.search($('.form-control').val());
  }, 

  processKey: function(e) {
    if (e.which === 13) {
      this.selectHandler();
    }
  },
  
  template: templateURL('src/templates/search.html')

});

