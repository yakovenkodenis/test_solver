module API
  module V1
    class Questions < Grape::API
      include API::Errors
      include API::V1::Defaults

      resource :questions do
        desc 'Get all questions for the test'
        params do
          requires :test_id, type: Integer, desc: 'Id of the test'
          optional :deep, type: Boolean,
                          desc: 'Asserts if nesting will be performed'
        end
        get 'test/:id' do
          test = Test.find(params[:test_id])

          if test
            if params[:deep]
              test.questions.as_json(include: :answers)
            else
              test.questions.as_json
            end
          else
            { error: "No test with id #{params[:test_id]}" }
          end
        end

        desc 'Create new question for a test'
        params do
          requires :test_id, type: Integer, desc: 'Id of the test'
          requires :question, type: String, desc: 'Body of the question'
        end
        post 'new' do
          test = Test.find(params[:test_id])

          if test
            ActiveRecord::Base.transaction do
              question = Question.new(question: params[:question], test: test)
              question.save!
              question.as_json
            end
          else
            { error: "No test with id #{params[:test_id]}" }
          end
        end
      end
    end
  end
end
