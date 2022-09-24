class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :comments
  has_many :categories
  has_many :brands
end
