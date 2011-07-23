wb.Views.WeatherShow = Backbone.View.extend({
  initialize: function() {
    this.model = wb.current.weather;
    this.model.bind("change", this.render);

    _.bindAll(this, "render");
    this.template = JST["weather/show"];
  },
  render: function () {
    $(this.el).html(this.template({ model     : wb.current.weather.toJSON(),
                                    latitude  : wb.current.latitude,
                                    longitude : wb.current.longitude }));
    $(".content").html($(this.el));
    return this;
  }
});
