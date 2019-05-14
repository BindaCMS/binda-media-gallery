class MediumSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers

  attributes :id, :name, :description, :file_url

  def file_url
    #variant = object.file.variant(resize: "100x100")
    #return rails_representation_url(variant, only_path: true)
    return rails_blob_path(object.file, only_path: true)
  end
end
