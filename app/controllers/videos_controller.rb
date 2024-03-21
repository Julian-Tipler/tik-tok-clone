class VideosController < ApplicationController
  before_action :set_video, only: %i[show update destroy like]
  skip_before_action :authenticate_request, only: %i[index show]

  # GET foryou /videos
  def index
    if current_user
      videos = Video.videos_for_user(current_user)
      render json: videos, scope: current_user
    else
      videos = Video.all
      render json: videos
    end
  end

  # GET /videos/1
  def show
    render json: @video
  end

  # POST /videos
  def create
    @video = Video.new(video_params)
    if @video.save
      render json: @video, status: :created, location: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /videos/1
  def update
    if @video.update(video_params)
      render json: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # POST /videos/1/like
  def like
    @video.toggle_like_by(@current_user)
    render json: @video
  end

  # DELETE /videos/1
  def destroy
    @video.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_video
    @video = Video.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def video_params
    params.require(:video).permit(:user_id, :title, :description, :video_url, :thumbnail_url, :view_count)
  end
end
