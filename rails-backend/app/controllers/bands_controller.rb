class BandsController < ApplicationController
  def index
    bands = Bands.all
    render json: bands
  end
end
