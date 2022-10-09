class CommentsController < ApplicationController

    def index
        render json: Comment.all, status: :ok
    end

    def create
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    def show
        comments = Comment.where(:user => params[:id])
        if comments
            render json: comments
        end
    end

    def update
        comment = Comment.where(:user => params[:id])
        comment.update(comment_params)
        render json: comment
    end

    private

    def comment_params
        params.permit(:body, :user_id, :review_id)
    end

end
