Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get "login", to: "users#index"
  # get "login", controller: 'users', action: :index

  # resources :characters, except: [:index, :show]
  # resources :characters

  # resources :locations

  resources :characters do
    resources :locations
  end
end
