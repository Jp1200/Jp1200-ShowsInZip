Rails.application.routes.draw do
  get 'sessions/new'
  post 'sessions/create'
  post 'sessions/login'
  get 'sessions/welcome'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, :events, :bands, :event_bands

end
