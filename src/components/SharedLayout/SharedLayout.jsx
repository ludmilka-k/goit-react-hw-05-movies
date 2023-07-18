import { StyledContainer } from '../App/App.styled';
import { Loader } from '../Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenu, HeaderNavLink } from './SharedLayout.styled';


export const SharedLayout = () => {
  return (
    <>
      <header>
        <StyledContainer>
          <NavMenu>
            <HeaderNavLink to='/'>Home</HeaderNavLink>
            <HeaderNavLink to='/movies'>Movies</HeaderNavLink>
          </NavMenu>
        </StyledContainer>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
