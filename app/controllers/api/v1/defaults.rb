module API
  module V1
    module Defaults
      extend ActiveSupport::Concern

      included do
        version 'v1'
        format :json
        content_type :json, 'application/json;charset=utf-8'

        rescue_from ActiveRecord::RecordNotFound do |e|
          error_response(message: e.message, status: 404)
        end

        rescue_from :all do |e|
          if Rails.env.development?
            fail e
          else
            error_response(message: 'Internal server error', status: 500)
          end
        end

        def permitted_params
          @permitted_params ||= declared(params, include_missing: false)
        end
      end
    end
  end
end
