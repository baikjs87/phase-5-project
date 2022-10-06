class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :rating, :recommend, :comments

  belongs_to :user
  belongs_to :brand
  belongs_to :category
  has_many :comments
end
