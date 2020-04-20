class Event < ApplicationRecord
  
  has_many :eventbands
  has_many :bands, through: :event_bands

end
