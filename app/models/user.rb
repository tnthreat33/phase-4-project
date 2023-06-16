class User < ApplicationRecord
    has_many :reservations
    has_many :courts, through: :reservations
end
