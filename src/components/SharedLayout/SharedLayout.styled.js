import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 24px;
  border-bottom: 1px solid #3f51b5;
`;
export const HeaderNavLink = styled(NavLink)`
  position: relative;
  display: inline-block;

  font-weight: 700;
  font-size: 60px;
  text-transform: uppercase;
  padding: 8px 16px;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #303f9f;
  }

  &.active {
    color: #3f51b5;
  }

  //&.active::after  {
  //  content: "";
  //  display: block;
  //  position: absolute;
  //  bottom: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 4px;
  //  border-radius: 2px;
  //
  //  background-color: #3f51b5;
  //}
`;
