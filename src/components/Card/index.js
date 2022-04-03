import React from 'react';
import PropTypes from 'prop-types';

import { CardBase, Name, Label, Value, Row, Info, Image, LastName, Header } from './styles';

const Card = ({ name, lastName, country, imageUrl }) => (
  <CardBase>
    <Image src={imageUrl} />
    <Info>
      <Header>
        <Name>{name}</Name>
      </Header>
      <Row>
        <LastName>
          <Label>Lastname</Label>
          {lastName}
        </LastName>
      </Row>
      <Row>
        <Label>Country</Label>
        <Value>{country}</Value>
      </Row>
    </Info>
  </CardBase>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
