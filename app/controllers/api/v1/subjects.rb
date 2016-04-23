module API
  module V1
    class Subjects < Grape::API
      include API::Errors
      include API::V1::Defaults

      resource :subjects do
        desc 'Get all subjects'
        params do
          optional :deep, type: Boolean,
                          desc: 'Asserts if nesting will be performed'
        end
        get 'all' do
          if params[:deep]
            Subject.all.as_json(
              include: {
                tests: {
                  include: {
                    questions: {
                      include: :answers
                    }
                  }
                }
              }
            )
          else
            Subject.all.as_json
          end
        end

        desc 'Create new subject'
        params do
          requires :name, type: String, desc: 'Name of the subject'
        end
        post 'new' do
          ActiveRecord::Base.transaction do
            subject = Subject.new(name: params[:name])
            subject.save!
            subject.as_json
          end
        end
      end
    end
  end
end