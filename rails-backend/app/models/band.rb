class Band < ApplicationRecord
  has_many :event_bands
  has_many :events, through: :event_bands
end
