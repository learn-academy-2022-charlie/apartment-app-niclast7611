import React, { Component } from 'react'
import { 
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button } from 'reactstrap';
  import { NavLink } from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    console.log("props.apartment:", apartments);
    return (
      <div id='index-container'>
      <h2>Apartment Listings</h2>
      <div className='index-cards'>
        {apartments && apartments.map((value, index) => {
          return (
            <Card key={index} style={{ width: '27rem' }}>
            <CardImg id='card-img' src={value.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{`${value.street}, ${value.city}, ${value.state}`}</CardTitle>
              <CardSubtitle>{value.price}</CardSubtitle>
              <NavLink to={`/apartmentshow/${value.id}`}>
                <Button style={{ backgroundColor: 'tan', color:'black' }}>View Listing</Button>
              </NavLink>
            </CardBody>
            </Card>
            )
          })}
      </div>
    </div>
    )
  }
}
