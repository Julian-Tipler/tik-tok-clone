class Video < ApplicationRecord
  belongs_to :user
  has_many :comments

  has_many :likes, as: :likeable, dependent: :destroy
end
