class BandsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    bands = Bands.all
    render json: bands
  end
end
