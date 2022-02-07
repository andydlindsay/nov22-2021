class LocationsController < ApplicationController
  def index
    # req.params.character_id
    
    @character = Character.find params[:character_id]
    @locations = @character.locations
  end
end
