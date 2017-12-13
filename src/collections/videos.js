var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {  

    this.forEach(function(video) {
      new Video({model: video});
    });
    
  },
 
  search: function(message) {
   // console.log(window.key)
    Backbone.ajax({
  // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'maxResults': '5',
        'q': message,
        'key': window.key,
        'part': 'snippet'
      },
      success: function (data) {
   //     console.log('chatterbox: Message sent', data);
        console.log('array is ', data.items);
        var newApp = new AppView(data.items);
        return data.items;
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('Failed to send message', data);
      }
    });
  }
});
