Weatherbee::Application.routes.draw do
  get "weather/search"
  root :to => 'weather#index'
end
