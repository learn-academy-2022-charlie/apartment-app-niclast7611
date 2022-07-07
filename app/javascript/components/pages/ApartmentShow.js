import React, { Component } from 'react'
import { 
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  CardText, 
  Button } from 'reactstrap';
  import { NavLink } from 'react-router-dom'
  
export default class ApartmentShow extends Component {
  render() {
      const { apartment } = this.props
    return (
        <div id='index-container'>
        <h2>Apartment Listings</h2>
        <div className='index-cards'>

          {apartment && 
            <Card style={{ width: '27rem' }}>
              <CardImg id='card-img' src={apartment.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{`${apartment.street}, ${apartment.city}, ${apartment.state}`}</CardTitle>
                <CardText>{`Rent: ${apartment.price}`}</CardText>
                <CardText>{`Manager: ${apartment.manager}`}</CardText>
                <CardText>{`Contact: ${apartment.email}`}</CardText>
                <CardText>{`Bedrooms: ${apartment.bedrooms}, Bathrooms: ${apartment.bathrooms}`}</CardText>
                <CardText>{`Pets Allowed: ${apartment.pets}`}</CardText>
                <NavLink to={'/apartmentindex'}>
                  <Button style={{ backgroundColor: 'tan', color:'black' }}>Back To All Listings</Button>
                </NavLink>
              </CardBody>
            </Card>
            }
        </div>
      </div>
    )
  }
}
