Rails.application.routes.draw do
  namespace :admin do
    resources :answers
    resources :questions
    resources :subjects
    resources :tests

    root to: 'answers#index'
  end

  root 'home#index'

  mount API::Base => '/api'
end
