import React, { useState } from 'react';
import Title from '../../components/Title';
import {
  Container,
  Text,
  Button,
  HeadingText,
  MediumText,
  Yellow,
} from '../../assets/universal';
import {
  Block,
  Subtitle,
  TimelineImage,
  AppInfo,
  AccordionWrapper,
  Question,
  Answer,
} from './style';
import timeline from '../../assets/recruitment/timeline.jpg';
import { FAQContents } from '../../constants/FAQ';

const QA = ({ question, answer }: { question: string; answer: string }) => {
  const [active, setActive] = useState(false);

  return (
    <AccordionWrapper>
      <Question active={active} onClick={() => setActive(!active)}>
        <MediumText>{question}</MediumText>
      </Question>
      {active && (
        <Answer>
          <Text>{answer}</Text>
        </Answer>
      )}
    </AccordionWrapper>
  );
};

function Recruitment() {
  return (
    <>
      <Title heading="RECRUITMENT" />
      <Container>
        <Block>
          <Subtitle>
            <HeadingText bold>RECRUITMENT TIMELINE</HeadingText>
            <Button to="https://www.facebook.com/events/1035789407170141?ref=newsfeed">
              <Text color="inherit">Event</Text>
            </Button>
          </Subtitle>
          <TimelineImage src={timeline} />
          <AppInfo>
            <MediumText center>
              Interested in joining?
              <br />
              Our application is currently open for Fall 2021.
            </MediumText>
            <Button to="https://bit.ly/CCCfallapp">Apply Now</Button>
            <MediumText center>
              Applications are due <Yellow>October 8th at 3 pm PST</Yellow>
            </MediumText>
          </AppInfo>
        </Block>
        <Block>
          <HeadingText bold>FREQUENTLY ASKED QUESTIONS</HeadingText>
          <div>
            {FAQContents.map((item, i) => {
              return (
                <div key={i}>
                  <QA {...item} />
                </div>
              );
            })}
          </div>
        </Block>
      </Container>
    </>
  );
}

export default Recruitment;
