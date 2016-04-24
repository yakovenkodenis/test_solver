module API
  module V1
    class Answers < Grape::API
      include API::Errors
      include API::V1::Defaults

      resource :answers do
        desc 'Get all the answers for the question'
        params do
          requires :question_id, type: Integer, desc: 'Id of the question'
        end
        get 'all' do
          question = Question.find(params[:question_id])

          if question
            question.answers.as_json
          else
            { error: "No question with id #{params[:question_id]}" }
          end
        end

        desc 'Create new answer to the question'
        params do
          requires :question_id, type: Integer, desc: 'Id of the question'
          requires :answer, type: Array[String],
                            coerce_with: ->(val) { val.split(/\s+/) },
                            desc: 'Answer to the question'
        end
        post 'new' do
          question = Question.find(params[:question_id])

          if question
            ActiveRecord::Base.transaction do
              response = []
              params[:answer].each do |ans|
                answer = Answer.new(answer: ans, question: question)
                answer.save!
                response << answer.as_json
              end
              response.as_json
            end
          else
            { error: "No question with id #{params[:question_id]}" }
          end
        end
      end
    end
  end
end
