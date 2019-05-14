class Api::MediaController < ApplicationController

  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    respond_to do |format|
      format.json { render json: Medium.order(created_at: :DESC) }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: Medium.find(params[:id]) }
    end
  end

  def create
    respond_to do |format|
      format.json { render json: Medium.create(medium_params) }
    end
  end

  def destroy
    respond_to do |format|
      format.json { render json: Medium.destroy(params[:id]) }
    end
  end

  def update
    medium = Medium.find(medium_params['id'])
    medium.update(medium_params)
    respond_to do |format|
      format.json { render json: medium }
    end
  end

  private

  def medium_params
    params.require(:medium).permit(
        :id,
        :name,
        :description,
        :file
    )
  end
end
