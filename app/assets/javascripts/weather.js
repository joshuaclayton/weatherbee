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
})();
