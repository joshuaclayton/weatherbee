wb.Controllers.Weather = Backbone.Controller.extend({
  routes: {
    "": "show"
  },

  show: function() {
    wb.current.view = new wb.Views.WeatherShow();
    wb.current.view.render();
  },
});
