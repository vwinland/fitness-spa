Rails.application.routes.draw do
  resources :exercises
  resources :workouts, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
