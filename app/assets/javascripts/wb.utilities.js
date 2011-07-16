(function() {
  var reorient = function(event) {
    var windowOrientation = ((window.orientation || 180) % 180 == 0) ? "portrait" : "landscape";
    $("body").attr("data-orient", windowOrientation);
  };

  window.wb.utilities = {
    formatTemperature: function(temp) {
      return temp.fahrenheit + '&deg;';
    },

    formatTime: function(time) {
      return time.hour + ":" + time.min;
    },

    dayName: function(date) {
      var date = new Date(date),
          days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[date.getDay()];
    },

    conditionName: function(name) {
      return window.wb.conditions[name];
    },

    radarUrl: function(latLong) {
      return "http://resize.wunderground.com/cgi-bin/resize_convert?ox=gif&url=radblast/cgi-bin/radar/WUNIDS_composite%3Fcenterlat=" + latLong.latitude + "%26centerlon=" + latLong.longitude + "%26radius=20%26newmaps=1%26smooth=1";
    },

    setupOrientation: function() {
      window.onorientationchange = reorient;
      setTimeout(reorient, 0);
    },

    getCurrentLocation: function(options) {
      var locationFound = false,
          checkFailure  = function() {
            if(!locationFound) {
              if($.isFunction(options.failure)) { options.failure(); }
            }
          };

      navigator.geolocation.getCurrentPosition(function(position) {
        locationFound = true;
        wb.current.latitude  = position.coords.latitude;
        wb.current.longitude = position.coords.longitude;
        if($.isFunction(options.success)) { options.success(); }
      });

      setTimeout(checkFailure, options.timeout || 10000);
    }
  };
})();
