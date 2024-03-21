class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :video_url, :thumbnail_url, :view_count, :created_at, :user,
             :likes_count, :comments_count
  attribute :user_like?, if: :scope_present?

  def likes_count
    object.likes.count
  end

  def user_like?
    puts '**'
    puts scope.id
    puts object.likes.inspect
    puts object.likes.exists?(user_id: scope.id)
    puts '**'

    scope && object.likes.exists?(user_id: scope.id)
  end

  def scope_present?
    !!scope
  end

  def comments_count
    object.comments.count
  end
end
