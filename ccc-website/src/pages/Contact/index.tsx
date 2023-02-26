import React from 'react';
import Title from '../../components/Title';
import { Text, Yellow } from '../../assets/universal';
import { Content } from './style';

function Contact() {
  return (
    <div>
      <Title heading="CONTACT US" />
      <Content>
        <Text
          fontSize="35px"
          tabletFont="28px"
          mobileFont="18px"
          lineHeight="40px"
          center
        >
          If you would like to contact us, please email:
          <br />
          <Yellow>
            <a
              style={{ textDecoration: 'none', color: '#FFE27C' }}
              href="mailto:ucsdcornerstone@gmail.com"
            >
              ucsdcornerstone@gmail.com
            </a>
          </Yellow>
          <br />
          Or click on any of our socials down below!
        </Text>
      </Content>
    </div>
  );
}

export default Contact;
