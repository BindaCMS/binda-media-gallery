# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

def getManyImages
  images = []
  for i in 1..10 do
    images << {
        name: "img-#{i}",
        description: "The #{i.ordinalize} image"
    }
  end
  images
end

media = Medium.create(getManyImages)