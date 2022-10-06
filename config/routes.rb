Rails.application.routes.draw do
  resources :brands, only: [:create, :index]
  resources :categories, only: [:create, :index]
  post "/signup",  to: "users#create"
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :reviews, only: [:index, :show, :update, :destroy, :create]
  get '/users', to: 'users#index'
end
