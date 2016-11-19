require 'rails/application_controller'

class HomepageController < Rails::ApplicationController
  def index
    render file: Rails.root.join('public', 'index.html'), layout: false
  end
end
