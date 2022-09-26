class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :brand, :category, :price, :rating, :recommendation, description

  belongs_to :user
  has_many :comments
  belongs_to :brand
  belongs_to :category
end
