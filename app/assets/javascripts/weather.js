(function() {
  window.weather = {
    populate : function(selector, location) {
                 $.ajax({
                   url: "weather/search",
                   data: $.param(location),
                   success: function(data) {
                     $(selector).fadeOut("fast", function() {
                       $(this).html(data).fadeIn("fast");
                     });
                   }
                 });
               }
  };

  var reorient = function(event) {
    var windowOrientation = (window.orientation % 180 == 0) ? "portrait" : "landscape";
    $("body").attr("data-orient", windowOrientation);
  };

  window.onorientationchange = reorient;
  window.setTimeout(reorient, 0);
})();
