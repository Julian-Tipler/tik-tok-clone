class LikeSerializer < ActiveModel::Serializer
  attributes :id, :likeable_type, :likeable_id, :user_id, :created_at, :updated_at

  belongs_to :video
end
