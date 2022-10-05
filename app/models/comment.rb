class Comment < ApplicationRecord
    # belongs_to :user
    # belongs_to :review
    # validates :title, presence: true
    # validates :body, presence: true
    belongs_to :commentable, polymorphic: true
    validates :content, presence: true
    def to_s
        content
    end
end
