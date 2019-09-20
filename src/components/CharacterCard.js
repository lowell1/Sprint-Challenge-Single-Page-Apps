import React from "react";
import {Card, CardTitle, CardSubtitle, CardText, CardBody} from "reactstrap";

export default function CharacterCard({char}) {
  // console.log(Object.values(char))
  // const [id, name, origin, species, status] = Object.values(char);
  return (
    <Card>
      <CardBody>
        <CardTitle>Name: {char.name}</CardTitle>
        <CardSubtitle>Species: {char.species}</CardSubtitle>
        <CardText>Status: {char.status}</CardText>
      </CardBody>
    </Card>
  );
}