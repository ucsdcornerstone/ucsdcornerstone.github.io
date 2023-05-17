import styled from 'styled-components';
import landscape from '../../assets/home/sdlandscape.png';
import { Link } from 'react-router-dom';

export const TitleContainer = styled.div`
  background: url(${landscape}) no-repeat bottom;
  width: 100%;
  min-height: 410px;
  background-size: cover;
  padding: 35px 8vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: space-around;
`;

export const InfoContainer = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  padding: 0px 8vw;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 3vw;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const LibraryWrapper = styled.div`
  width: 70%;
  align-self: center;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Library = styled.img`
  display: block;
  width: 100%;
  align-self: center;
  filter: brightness(70%);
`;

export const LibraryText = styled.div`
  width: 75%;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-family: 'Lato', sans-serif;
  border: 3px solid #ffe27b;

  @media screen and (max-width: 1200px) {
    padding: 12px;
  }
`;

export const Purpose = styled.div`
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
  justify-content: center;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 768px) {
    gap: 24px;
  }
`;

export const ServiceImg = styled.img`
  width: 240px;
  height: 210px;
`;
