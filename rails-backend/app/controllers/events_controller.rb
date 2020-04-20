class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    events = Event.all
    render json: events

  end
  def show
    event = Event.find(params[:id])
    render json: event

  end
  def create
      new_event = Event.new(location: params[:location], show_date: params[:showDate], venue_name: params[:venue], title: params[:title])
      
         # render json: {messagee: 'event already exists'}

      new_event.save
      render json: new_event

  end
end
