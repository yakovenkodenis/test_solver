# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  question   :string
#  test_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  belongs_to :test
  has_many :answers
end
