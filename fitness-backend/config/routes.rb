Rails.application.routes.draw do
  resources :exercises
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #define routes
  ##namespace :api do
    ##namespace :v1 do
      
      resources :workouts, :exercises
    
  end
