import React from "react";
import {
  TitleContainer,
  InfoContainer,
  InfoBlock,
  Subtitle,
  Button,
  LibraryWrapper,
  Library,
  LibraryText,
  Purpose,
  ServiceWrapper,
  Service,
  ServiceImg,
} from "./style";
import { Text, Yellow } from "../../assets/universal";
import geisel from "../../assets/home/geisel.png";
import { services } from "../../assets/home/services";

function Home() {
  return (
    <>
      <TitleContainer>
        <Text
          fontSize="50px"
          letterSpacing="0.05em"
          tabletFont="35px"
          mobileFont="30px"
          bold
        >
          A <Yellow>community</Yellow> of <Yellow>consultants </Yellow>
          that will be the <Yellow>cornerstone</Yellow> of tomorrow's business
          landscape.
        </Text>

        <Text
          fontSize="25px"
          letterSpacing="0.05em"
          tabletFont="25px"
          mobileFont="20px"
          light
        >
          We are a student-run business consulting organization based at UC San
          Diego that provides pro-bono consulting services to local businesses.
        </Text>
      </TitleContainer>
      <InfoContainer>
        {/* Our mission and geisel image */}
        <InfoBlock>
          <Subtitle>
            <Text fontSize="2em" tabletFont="20px" mobileFont="18px" bold>
              OUR MISSION
            </Text>
            <Button to="/about">
              <Text>Learn More</Text>
            </Button>
          </Subtitle>
          <LibraryWrapper>
            <Library src={geisel} />
            <LibraryText>
              <Text fontSize="30px" letterSpacing="0.05em" lineHeight="126%">
                We strive to empower local businesses through community service,
                professional development, and future business leadership.
              </Text>
            </LibraryText>
          </LibraryWrapper>
        </InfoBlock>

        {/* Our services */}
        <InfoBlock>
          <Subtitle>
            <Text fontSize="2em" tabletFont="20px" mobileFont="18px" bold>
              OUR SERVICES
            </Text>
            <Button to="/services">
              <Text>Learn More</Text>
            </Button>
          </Subtitle>
          <Purpose>
            <Text fontSize="2em" tabletFont="20px" mobileFont="18px" center>
              Cornerstone Community Consultants provides tangible solutions
              tailored to each individual company. We want to work with you and
              your needs. Our organization offers the following services:
            </Text>
          </Purpose>
          <ServiceWrapper>
            {services.map((item) => (
              <Service>
                <Text fontSize="28px" tabletFont="20px" mobileFont="18px" center>{item.name}</Text>
                <ServiceImg src={item.image} />
              </Service>
            ))}
          </ServiceWrapper>
        </InfoBlock>
      </InfoContainer>
    </>
  );
}

export default Home;
