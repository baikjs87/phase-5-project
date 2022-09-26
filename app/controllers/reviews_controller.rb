class ReviewsController < ApplicationController

    def inde
        render json: Review.all, status: :ok
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    private
    
    def review_params
        params.permit(:title, :description, :price, :rating, :recommendation, :user_id, :category_id, :band_id)
    end

end