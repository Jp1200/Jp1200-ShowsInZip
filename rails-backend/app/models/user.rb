class User < ApplicationRecord
  has_many :events
  validates :email, uniqueness: true, presence: true
  validates :password, length: {in: 6..20}
end
