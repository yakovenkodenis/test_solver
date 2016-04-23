# == Schema Information
#
# Table name: tests
#
#  id         :integer          not null, primary key
#  name       :string
#  subject_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Test < ActiveRecord::Base
  belongs_to :subject
  has_many :questions
end
