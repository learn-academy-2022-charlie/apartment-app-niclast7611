import React, { Component } from 'react'
import { 
  Card, 
  CardImg, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button } from 'reactstrap';

export default class ApartmentIndex extends Component {
  render() {
    const { apartment } = this.props
    console.log("props.apartment:", apartment);
    return (
      <>
      <h2>Apartment Listings</h2>
      {apartment && apartment.map((value, index) => {
        return (
          <Card key={index}>
          <CardImg top width="100%" src={value.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{`${value.street}, ${value.city}, ${value.state}`}</CardTitle>
            <CardSubtitle>{value.price}</CardSubtitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
        )
      })}
    </>
    )
  }
}
