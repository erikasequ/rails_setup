class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users 
    end

    def show
        @this_user = User.find(params[:id])
        render json: @this_user
    end

    def create
        @new_user = User.new(user_params)
        if @new_user.save
            render json: @new_user
        else
            render json: @new_user.errors
        end
    end

    def update
        @this_user = User.find(params[:id])

        if @this_user.update(user_params)
            render json: @this_user
        else
            render json: @this_user.errors
        end
    end

    def destroy
        @this_user = User.find(params[:id])

        if @this_user.destroy
            render json: {message: 'User Gone'}
        else
            render json: {message: 'User Stays'}
        end
    end

    private
    
    def user_params
        params.require(:users).permit(:first_name, :last_name, :age, :hometown)
    end
end
