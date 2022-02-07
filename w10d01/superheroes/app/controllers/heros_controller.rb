class HerosController < ApplicationController
  def index
    @power = Power.find params[:power_id]
    @heros = @power.heros

    # render json: { power: @power, heros: @heros }
  end
end
