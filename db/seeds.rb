# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments = [
    {
        street: "969 Market St",
        city: "San Diego",
        state: "California",
        manager: "John Doe",
        email: "johndoe@secretperson.com", 
        price: "$3,066 monthly", 
        bedrooms: 1, 
        bathrooms: 1, 
        pets: "Yes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur9WVVEXQxmB17JYgiBVf4-j3-jBp3E74Lg&usqp=CAU"  
    },
    {
        street: "200 Harbor Dr",
        city: "San Diego",
        state: "California",
        manager: "Steve Rodgers",
        email: "rodgers@capamerica.com", 
        price: "$3,400 monthly", 
        bedrooms: 1, 
        bathrooms: 1, 
        pets: "Yes",
        image: "https://live.staticflickr.com/2822/33484693884_c6ae61dbbb_b.jpg"  
    },
    {
        street: "162 W 56th St FRNT 1",
        city: "New York",
        state: "New York",
        manager: "Tony Stark",
        email: "stark@greatestave.com", 
        price: "$8,500 monthly", 
        bedrooms: 2, 
        bathrooms: 2, 
        pets: "Yes",
        image: "https://m.cbhomes.com/p/425/RPLU-33421734535/e6632e1B1E11470/original.jpeg"  
    }
]

apartments.each do |value|
    user.apartments.create value
end

p user.apartments
p "Apartments were made successfully"