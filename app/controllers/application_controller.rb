class ApplicationController < ActionController::API
  before_action :authenticate_request

  def current_user
    return @current_user if defined?(@current_user)

    header = request.headers['Authorization']
    return nil if header.blank?

    header = header.split(' ').last
    begin
      decoded = jwt_decode(header)
      @current_user = User.find(decoded[:user_id])
    rescue JWT::DecodeError => e
      nil
    end
  end

  private

  def authenticate_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      decoded = jwt_decode(header)
      @current_user = User.find(decoded[:user_id])
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

  def jwt_decode(token)
    body = JWT.decode(token, Rails.application.credentials.secret_key_base, true, { algorithm: 'HS256' })[0]
    HashWithIndifferentAccess.new body
  rescue JWT::DecodeError => e
    render json: { errors: e.message }, status: :unauthorized
  end
end
