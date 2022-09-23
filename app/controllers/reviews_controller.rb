class ReviewsController < ApplicationController
    belongs_to :user
    has_many :favorites
    has_many :comments
    belongs_to :category
    belongs_to :brand
    validates :title, presence: true
    validates :description, length: { in: 10..1000 }
    validates :category_id, presence: true
    validates :brand_id, presence: true
    validates :rating, presence: true
end
