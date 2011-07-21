namespace :templates do
  desc "Refresh all templates"
  task :touch do
    %x{touch app/assets/javascripts/**/*.js.erb}
  end
end
