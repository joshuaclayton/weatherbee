(function() {
  var tempData = {
    measurements: [
      {
        locationName: "Quincy, MA"
      }
    ],
    now: {
      temperature : "84 F",
      dew_point   : "65 F",
      visibility  : "10 m",
      pressure    : "29 in",
      wind        : "5mph SSE",
      sun: {
        rise: "05:40 AM",
        set: "05:40 AM"
      }
    },
    forecast: [
      { date : "7/17", high : "85 F", low : "60 F" },
      { date : "7/18", high : "85 F", low : "60 F" },
      { date : "7/19", high : "85 F", low : "60 F" },
      { date : "7/20", high : "85 F", low : "60 F" },
      { date : "7/21", high : "85 F", low : "60 F" },
      { date : "7/22", high : "85 F", low : "60 F" }
    ]
  };

  window.wb = {
    Controllers : {},
    Views       : {},
    current     : {},
    conditions: {
      "clear"        : "Clear",
      "cloudy"       : "Cloudy",
      "flurries"     : "Flurries",
      "fog"          : "Fog",
      "hazy"         : "Hazy",
      "mostlycloudy" : "Mostly Cloudy",
      "mostlysunny"  : "Mostly Sunny",
      "partlycloudy" : "Partly Cloudy",
      "partlysunny"  : "Partly Sunny",
      "rain"         : "Rain",
      "sleet"        : "Sleet",
      "snow"         : "Snow",
      "sunny"        : "Sunny",
      "tstorms"      : "Thunderstorms",
      "unknown"      : "Unknown"
    },
    getWeather: function(latitude, longitude, callback) {
      if(wb.loadTempData) {
        callback(tempData);
      } else {
        $.ajax({
          url: "/weather/search",
          data: { latitude: latitude, longitude: longitude },
          success: function(data) {
            callback(data);
          }
        });
      }
    }
  };
})();
