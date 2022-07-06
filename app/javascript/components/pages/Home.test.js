// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
  it("displays a larger heading", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("h2")
    // console.log("HOME", homeHeading.debug());
    expect(homeHeading.text()).toEqual("Find your Perfect Place")
  })
  it("displays a paragraph of information about the app", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("p")
    // console.log("HOME", homeHeading.debug());
    expect(homeHeading.length).toEqual(1)
  })
  it("displays a carousel of images of apartments", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("UncontrolledCarousel")
    // console.log("HOME", homeHeading.debug());
    expect(homeHeading.length).toEqual(1)
  })
})