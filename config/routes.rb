Rails.application.routes.draw do
  post "/signup",  to: "users#create"
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # resources :reviews, only: [:index, :show, :create, :update, :destroy]
  post '/post', to: 'reviews#create'
end
