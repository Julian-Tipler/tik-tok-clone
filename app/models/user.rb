class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  has_secure_password
  has_many :videos, dependent: :destroy
  has_many :comments, dependent: :destroy
end
