wb.Routers.Weather = Backbone.Router.extend({
  routes: {
    "": "show"
  },

  show: function() {
    wb.current.view = new wb.Views.WeatherShow();
  },
});
