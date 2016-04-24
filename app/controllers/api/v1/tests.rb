module API
  module V1
    class Tests < Grape::API
      include API::Errors
      include API::V1::Defaults

      resource :tests do
        desc 'Get all tests for a subject'
        params do
          requires :subject_id, type: Integer, desc: "Id of the test's subject"
          optional :deep, type: Boolean,
                          desc: 'Asserts if nesting will be performed'
        end
        get 'subject/:id' do
          subject = Subject.find(params[:subject_id])

          if subject
            if params[:deep]
              subject.tests.as_json(
                include: {
                  questions: {
                    include: :answers
                  }
                }
              )
            else
              subject.tests.as_json
            end
          else
            { error: "No subject with id #{params[:subject_id]}" }
          end
        end

        desc 'Create new test for a subject'
        params do
          requires :subject_id, type: Integer, desc: "Id of the test's subject"
          requires :name, type: String, desc: 'Name of the test'
        end
        post 'new' do
          subject = Subject.find(params[:subject_id])

          if subject
            ActiveRecord::Base.transaction do
              test = Test.new(name: params[:name], subject: subject)
              test.save!
              test.as_json
            end
          else
            { error: "No subject with id #{params[:subject_id]}" }
          end
        end
      end
    end
  end
end
