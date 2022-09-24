class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :review
    validates :name, presence: true
end
