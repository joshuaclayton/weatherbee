class WeatherController < ApplicationController
  def index
  end

  def search
    @latitude = params[:lat]
    @longitude = params[:long]
    @weather = find_weather
    render :layout => false
  end

  private

  def find_weather
    weather_query = [@latitude, @longitude].join(",")
    Barometer.new(weather_query).measure
  end
end
