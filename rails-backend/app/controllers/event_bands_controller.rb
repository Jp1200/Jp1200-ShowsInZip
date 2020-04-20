class EventBandsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    ebs = EventBand.all
    render json: ebs

  end
end
