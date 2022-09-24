class Review < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :favorites
    belongs_to :category
    belongs_to :brand
end
