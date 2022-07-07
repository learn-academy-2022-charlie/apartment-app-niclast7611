require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a all the apartments in the database' do 
      user = User.where(email: 'test@example.com').first_or_create(password: '123456', password_confirmation: '123456')

      user.apartments.create(
        street: "String",
        city: "string",
        state: "string",
        manager: "string",
        email: "string", 
        price: "string", 
        bedrooms: 2, 
        bathrooms: 2, 
        pets: "string",
        image: "www.urlhelper.com"
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end
end
