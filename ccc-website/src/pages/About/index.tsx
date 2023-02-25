import React from 'react';
import Title from '../../components/Title';
import { Container, Block, Column, Handshake } from './style';
import { Text } from '../../assets/universal';
import handshake from '../../assets/about/handshake.jpg';

function About() {
  return (
    <>
      <Title heading="ABOUT US" />
      <Container>
        <Column>
          <Text fontSize="2.2em" tabletFont="1.7em" mobileFont="1.4em" bold>
            OUR MISSION
          </Text>
          <Block>
            <Handshake src={handshake} />
            <Text fontSize="20px" tabletFont="18px" mobileFont="18px" lineHeight="126%">
              We have a vision which is to foster professionalism, excellence,
              and integrity among students by delivering economic value to the
              community through pro-bono consulting services.
              <br />
              <br />
              Founded in 2014, Cornerstone Community Consultants is a student
              group that delivers top quality research, analysis, and
              coordination to local businesses. Our student consultants are
              among the brightest talents who are committed to contributing back
              to the community through our mutual passion, business. Clients can
              expect only the best service from our consulting teams to address
              their various needs. Please see our services page to learn more
              about what we offer, as well as our portfolio to see descriptions
              of previous projects.
            </Text>
          </Block>
        </Column>
        <Block column>
          <Text  fontSize="2.2em" tabletFont="1.7em" mobileFont="1.4em" bold>
            WHAT SETS US APART
          </Text>
        </Block>
        <Text fontSize="20px" tabletFont="18px" mobileFont="18px" lineHeight="126%">
          All clients receive free consulting from a team of dedicated students,
          as we never charge for our services. This way, we foster a selfless
          environment, and can directly give back to our community. CCC strives
          to serve as the bridge between community service, professional
          development, and future business leadership.
        </Text>
      </Container>
    </>
  );
}

export default About;
