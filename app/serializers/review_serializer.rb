class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :rating, :recommend, :category_id, :brand_id

  # belongs_to :user
  # has_many :comments
  # # belongs_to :brand
  # belongs_to :category
end
