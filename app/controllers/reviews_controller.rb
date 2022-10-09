class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def create
        render json: Review.create(review_params), status: :created
    end

    def show
        reviews = Review.where(:user => params[:id])
        if reviews
            render json: reviews
        end
    end

    private
    
    def review_params
        params.permit(:recommend, :title, :description, :price, :rating, :recommendation, :brand_id, :category_id, :user_id, :review_data)
    end

end