class Test < ActiveRecord::Base
  belongs_to :subject
  has_many :questions
end
