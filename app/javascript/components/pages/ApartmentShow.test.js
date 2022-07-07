// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentShow renders", () => {
  const props = {
    apartment: [
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
  let apartmentShowRender
  beforeEach(() => {
    apartmentShowRender = shallow(<ApartmentShow {...props} />)
  })
  
  it("displays a single card with all the info about the listing", () => {
    const apartmentShowCard = apartmentShowRender.find("Card")
    expect(apartmentShowCard.length).toEqual(1)
  })
})