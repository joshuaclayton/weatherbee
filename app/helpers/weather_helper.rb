module WeatherHelper
  def degrees(value)
    "#{value.to_i}&deg;".html_safe
  end

  def format_time(time)
    Time.parse(time.to_s).strftime("%l:%M %P").strip
  end

  def condition_name(condition)
    conditions[condition]
  end

  def radar_url(latitude, longitude)
    %{http://resize.wunderground.com/cgi-bin/resize_convert?ox=gif&url=radblast/cgi-bin/radar/WUNIDS_composite%3Fcenterlat=#{latitude}%26centerlon=#{longitude}%26radius=20%26newmaps=1%26smooth=1}
  end

  private

  def conditions
    {
      "clear"        => "Clear",
      "cloudy"       => "Cloudy",
      "flurries"     => "Flurries",
      "fog"          => "Fog",
      "hazy"         => "Hazy",
      "mostlycloudy" => "Mostly Cloudy",
      "mostlysunny"  => "Mostly Sunny",
      "partlycloudy" => "Partly Cloudy",
      "partlysunny"  => "Partly Sunny",
      "rain"         => "Rain",
      "sleet"        => "Sleet",
      "snow"         => "Snow",
      "sunny"        => "Sunny",
      "tstorms"      => "Thunderstorms",
      "unknown"      => "Unknown"
    }
  end
end
