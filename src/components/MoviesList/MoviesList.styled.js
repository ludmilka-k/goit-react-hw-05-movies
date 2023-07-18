import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  position: relative;
  width: 280px;

  margin-bottom: 16px;
  font-size: 12px;
  line-height: 16px;
`;

export const Darkening = styled.div`
  position: absolute;
  background: rgba(17, 17, 17, 1);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.97) 92.16%
  );
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: #212121;

  &:hover {
    color: #4fa94d;
  }
`;

export const StyledImage = styled.img`
  border-radius: 5px;
  //width: 100%;
  //height: 467px;
  //object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 12px 12px 12px;

  font-weight: 500;
  width: 100%;
`;

export const Name = styled.h3`
  font-size: inherit;
  font-weight: inherit;
  color: white;
  text-transform: uppercase;
  width: 90%;
  padding-bottom: 4px;
`;

