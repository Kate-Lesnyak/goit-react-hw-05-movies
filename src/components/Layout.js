import { Outlet } from 'react-router-dom';
import { Header, Link, Logo } from './App/App.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Logo>Filmoteka</Logo>
        <nav>
          <ul>
            {/* <li> */}
            <Link to="/">Home</Link>
            {/* </li> */}

            {/* <li> */}
            <Link to="/movies">Movies</Link>
            {/* </li> */}
          </ul>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
