Rails.application.routes.draw do
  resources :brands, only: [:create, :index]
  post "/signup",  to: "users#create"
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :reviews, only: [:index, :show, :update, :destroy]
  post '/posts', to: 'reviews#create'
  get '/users', to: 'users#index'
  # post '/brand', to: 'brands#create'

end
