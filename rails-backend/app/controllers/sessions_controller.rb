class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
  end

def create
    user = User.find_by(username: params[:username])
  if user && user.authenticate(params[:password])
     sessions[:user_id] = user.id
     render json: user
  else
     render json: {message: 'error email/password incorrect!'}
  end
end
  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:id] = user.id
      render json: user
    else
      render json: {message: 'Wrong email or password!'}
    end
  end

  def welcome
  end
end
