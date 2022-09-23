class BrandsController < ApplicationController
    has_many :reviews
    has_many :users, through: :reviews
end
 