class UsersController < ApplicationController
    def create
      user = User.create(user_params)
      if user
        session[:user_id] = user.id
        render json: { user: user }, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
      
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
  end
  
