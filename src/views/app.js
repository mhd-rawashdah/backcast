var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
  	// create object from collection and pass array of model
    this.videos = new Videos(exampleVideoData);
    // call render method
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    // connection listView with  appView parent by cearte object and pass el (the class name of elemet 
    //in html in JQuery) and call render method  
    new VideoListView({
    	el: this.$('.list'),
    	collection: this.videos}
    	).render();
    // connection searchView with  appView parent by cearte object and pass el (the class name of elemet 
    //in html in JQuery ) and call render method  
    new SearchView({
    	el: this.$('.search')}
    	).render();
    // connection VideoPlayer with  appView parent by cearte object and pass el (the class name of elemet in
    // html in JQuery )and pass model and call render method  
    new VideoPlayerView({
    	el: this.$('.player'), 
    	model: this.videos.at(0)}
    	).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
