class Exercise < ApplicationRecord
    belongs_to :workout, optional: true
    validates :name, presence: true
end
