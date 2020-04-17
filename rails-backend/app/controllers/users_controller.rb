class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    users = User.all
    render json: users
  end
  def show
    user = User.find(params[:id])
    render json: user
  end
  def create
    user = User.new(name: params[:name], email:params[:email], password:params[:password])
    if user.valid?
      session[:user_id] = user.id
      user.save
      render json: user
    else
       render json: user.errors.full_messages
    end
  end

  private

end
