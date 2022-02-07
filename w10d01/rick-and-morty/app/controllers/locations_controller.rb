class LocationsController < ApplicationController
  def index
    # req.params.character_id
    
    @character = Character.find params[:character_id]
    @locations = @character.locations

    render json: {
      character: @character,
      locations: @locations,
      some_other_key: "even more fun stuff"
    }
  end
end
