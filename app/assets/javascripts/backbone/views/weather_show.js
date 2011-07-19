wb.Views.WeatherShow = Backbone.View.extend({
  name: "WeatherShow",
  initialize: function() {},
  render: function () {
    var element = this.el;
    wb.getWeather(wb.current.latitude, wb.current.longitude, function(weather) {
      $(element).html(JST["weather/show"]({ model     : weather,
                                            latitude  : wb.current.latitude,
                                            longitude : wb.current.longitude }));
      $(".primary-content").html($(element));
    });
  }
});
