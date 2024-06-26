Rails.application.routes.draw do
  # get 'books/index'
  # get 'books/show'
  # get 'author/index'
  # get 'author/show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # /authors
  root "author#index"

  resources :author, :path => "authors", only: [:index, :show]
  resources :books, :path => "books", only: [:index, :show]
end
