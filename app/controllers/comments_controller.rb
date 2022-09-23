class CommentsController < ApplicationController
    belongs_to :user
    belongs_to :review
    validates :title, presence: true
    validates :body, presence: true
end
