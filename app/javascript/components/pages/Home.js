import React, { Component } from 'react'
import { UncontrolledCarousel } from 'reactstrap'


export default class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        <UncontrolledCarousel
        interval='10000'
        className='carousel'
          items={[
            {
              className:'carousel-item',
              key: 1,
              src: 'https://static.seekingalpha.com/uploads/2021/4/23/saupload_Gentrified_architecture_in_Shaw_Neighborhood_2C_Washington_2C_DC_USA_thumb1.jpg'
            },
            {
              className:'carousel-item',
              key: 2,
              src: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62242947-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=046fd3bd9b61daa0b669f57567b9fea4'
            },
            {
              className:'carousel-item',
              key: 3,
              src: 'https://www.thekickassentrepreneur.com/wp-content/uploads/2019/06/Apartment-Buildings.jpg'
            }
          ]}
        />
        <h2>Find your Perfect Place</h2>
        <div id='body'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        
      </div>
    )
  }
}
