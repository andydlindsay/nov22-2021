class HerosController < ApplicationController
  def index
    @power = Power.find params[:power_id]
    @heros = @power.heros
  end
end
