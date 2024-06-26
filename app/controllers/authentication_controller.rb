class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, only: [:login]

  def login
    @user = User.find_by_email(params[:email])

    # Returns a boolean if the password matches the password_hash
    if @user&.authenticate(params[:password])
      token = jwt_encode(user_id: @user.id)
      render json: { token: }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def logout
    render json: { message: 'Logged out successfully.' }, status: :ok
  end

  private

  def jwt_encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end
end
