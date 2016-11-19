module API::V1
  class BaseController < ApplicationController
    before_action :mock_network_delay

    rescue_from CanCan::AccessDenied, with: :forbidden
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::StaleObjectError, with: :conflict
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    rescue_from ActionController::InvalidAuthenticityToken, with: :forbidden

    private

    def unauthorized
      head :unauthorized
    end

    def forbidden
      head :forbidden
    end

    def not_found
      head :not_found
    end

    def conflict
      head :conflict
    end

    def unprocessable_entity
      head :unprocessable_entity
    end

    def mock_network_delay
      sleep(rand(2)) if Rails.env.development?
    end
  end
end
