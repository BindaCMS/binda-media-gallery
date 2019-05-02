Rails.application.routes.draw do

  root to: redirect('/media')

  get 'media', to: 'site#index'
  get 'media/new', to: 'site#index'
  get 'media/:id', to: 'site#index'
  get 'media/:id/edit', to: 'site#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :media, only: %i[index show create destroy update]
  end

end
