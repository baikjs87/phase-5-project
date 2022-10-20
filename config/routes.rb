Rails.application.routes.draw do
  get '/', to: proc { [200, {}, ['']] }
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
