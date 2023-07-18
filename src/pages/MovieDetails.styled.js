import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  display: block;
  width: 100px;
  text-align: center;
  //text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: #3f51b5;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
`;

export const Aditional = styled.div`
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  padding: 10px;
`;
