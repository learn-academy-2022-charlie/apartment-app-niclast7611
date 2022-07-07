// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
      {
        id: 1, 
        street: "23 snugglebunny lane", 
        city: "Inglewood", 
        state: "CA", 
        manager: "Doctor Doom", 
        email: "doom@snugglebunny.com", 
        price: "5 hugs per month", 
        bedrooms: 2, 
        bathrooms: 2, 
        pets: "of course", 
        image: "www.urlhelper.com", 
        user_id: 2 }
    ]
  }
  let apartmentIndexRender
  beforeEach(() => {
    apartmentIndexRender = shallow(<ApartmentIndex {...props} />)
  })
  
  it("displays a heading", () => {
    const apartmentIndexHeading = apartmentIndexRender.find("h2")
    expect(apartmentIndexHeading.text()).toEqual("Apartment Listings")
  })
  it("displays a card for each unique listing", () => {
    const apartmentIndexCard = apartmentIndexRender.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})