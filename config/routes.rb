Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :videos
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post 'login', to: 'authentication#login'
  get 'me', to: 'users#me'
  get 'following', to: 'users#following'

  resources :videos do
    # get '/page/:page', action: :index, on: :collection
    member do
      post 'like', to: 'videos#like'
    end
  end
  # Other routes...

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
