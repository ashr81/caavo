class DocumentsController < ApplicationController
  def index
    if params[:type] == "aadharCard"
      render json: AadharCard.all
    elsif params[:type] == "drivingLicense"
      render json: DrivingLicense.all
    end
  end

  def show
  end

  def edit
  end
end
