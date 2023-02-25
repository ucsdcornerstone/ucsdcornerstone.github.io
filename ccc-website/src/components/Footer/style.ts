import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 100px;
  background: #fffdf4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3vw;
  
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 60px;
  width: 60px;
  @media screen and (max-width: 480px) {
    height: 45px;
    width: 45px;
  }
`;

export const Title = styled.h5`
  margin-left: 1em;
  font-family: 'Lato', sans-serif;
  font-size: 1.1em;
  letter-spacing: 0.135em;

  @media screen and (max-width: 480px) {
    font-size: 0.95em;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1em;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
