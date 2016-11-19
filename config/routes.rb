Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    end
  end

  root to: 'homepage#index'
end
