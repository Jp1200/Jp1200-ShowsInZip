class EventBandsController < ApplicationController
  def index
    ebs = EventBand.all
    render json: ebs

  end
end
