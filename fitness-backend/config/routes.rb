Rails.application.routes.draw do
  resources :workouts do 
    resources :exercises 
  end
  resources :exercises
    
  end
