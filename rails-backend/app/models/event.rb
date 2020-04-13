class Event < ApplicationRecord
  belongs_to :user
  has_many :eventbands
  has_many :bands, through: :event_bands

end
