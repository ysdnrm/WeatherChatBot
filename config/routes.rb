Rails.application.routes.draw do
  get 'chat_bots/index'
  root 'chat_bots#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
