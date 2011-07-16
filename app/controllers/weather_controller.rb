class WeatherController < ApplicationController
  def index
  end

  def search
    render :json => weather_json
  end

  private

  def weather_json
    weather_query = [params[:latitude], params[:longitude]].join(",")
    result = {}
    weather = Barometer.new(weather_query).measure
    result[:measurements] = weather.measurements
    result[:now]          = weather.now
    result[:forecast]     = weather.forecast

    result
  end
end
