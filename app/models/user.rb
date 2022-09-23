class User < ApplicationRecord
    has_many :reviews
    has_many :comments
    has_many :categories, through: :reviews
    has_many :brands, through: :reviews
    has_one :favorite
    validates :name, presence: true
    validates :password, presence: true
    has_secure_password
end