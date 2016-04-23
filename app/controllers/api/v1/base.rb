module API
  module V1
    class Base < Grape::API
      mount API::V1::Subjects
      mount API::V1::Tests
    end
  end
end
