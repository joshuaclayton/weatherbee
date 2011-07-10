class WeatherController < ApplicationController
  def index
  end

  def search
    @weather = find_weather
    render :layout => false
  end

  private

  def find_weather
    weather_query = [params[:lat], params[:long]].join(",")
    Barometer.new(weather_query).measure
  end
end
