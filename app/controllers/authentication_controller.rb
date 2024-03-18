class AuthenticationController < ApplicationController
  def login
    @user = User.find_by_email(params[:email])

    # Returns a boolean if the password matches the password_hash
    if @user&.authenticate(params[:password])
      token = jwt_encode(user_id: @user.id)
      render json: { token:, user_id: @user.id }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def jwt_encode(payload, exp = 24.hours.from_now)
    puts payload
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end
