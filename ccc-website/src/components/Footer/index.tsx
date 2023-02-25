import React from "react";
import { FooterWrapper, Logo, LogoImg, Title, Links, Icon } from "./style";
import { Socials } from "../../assets/footer";
import blackLogo from "../../assets/footer/blacklogo.png";

function Footer() {
  return (
    <FooterWrapper>
      <Logo>
        <LogoImg src={blackLogo} />
        <Title>Cornerstone Community Consultants</Title>
      </Logo>
      <Links>
        {Socials.map((item) => {
          return (
            <Icon
              src={item.image}
              onClick={() => window.open(item.link, "_blank")}
            />
          );
        })}
      </Links>
    </FooterWrapper>
  );
}

export default Footer;
