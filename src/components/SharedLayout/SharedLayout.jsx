import { StyledContainer } from '../App/App.styled'
import { Loader } from '../Loader';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {NavMenu, HeaderNavLink } from './SharedLayout.styled';


export const SharedLayout = () => {
	return (
		<>
      <header>
        <StyledContainer >
          <NavMenu>
            <HeaderNavLink to="/">Home</HeaderNavLink >
            <HeaderNavLink to="/movies">Movies</HeaderNavLink >
          </NavMenu>
        </StyledContainer>
      </header>
      <main>
        <Suspense fallback={ <Loader/> }>
          <Outlet />
        </Suspense>
      </main>
      {/*<footer>*/}
      {/*  <StyledContainer>*/}
      {/*    <p>&#169; <a href="https://github.com/ludmilka-k/goit-react-hw-05-movies" target="_blank" rel="noreferrer"><b> Developed by Ludmila Kurochkina </b></a>*/}
      {/*      , 2023</p>*/}
      {/*  </StyledContainer>*/}
      {/*</footer>*/}
    </>
	)
}
