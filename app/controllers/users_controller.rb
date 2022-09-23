class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :unauthorized

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        if user.valid?
            render json: user, status: :created 
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
    
    def unauthorized
        render json: { error: "Not authorized" }, status: :unauthorized
    end
end
