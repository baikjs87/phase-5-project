Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post "/signup",  to: "users#create"
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :brands, only: [:create, :index]
  resources :categories, only: [:create, :index]
  resources :reviews
  resources :users, only: [:index, :find]
  resources :comments
  resources :images
  
end
