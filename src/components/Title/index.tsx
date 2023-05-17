import React from 'react';
import { Container, Heading, Lines, Rectangle } from './style';
import { Text } from '../../assets/universal';

function Title({ heading }: { heading: string }) {
  return (
    <Container>
      <Heading>
        <Text
          fontSize="50px"
          letterSpacing="0.05em"
          tabletFont="35px"
          mobileFont="30px"
          bold
          center
        >
          {heading}
        </Text>
      </Heading>
      <Lines>
        <Rectangle />
        <Rectangle yellow />
      </Lines>
    </Container>
  );
}

export default Title;
