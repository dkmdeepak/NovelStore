import React, { useContext, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { TokenAuthContext } from '@/Context Api/AuthContext';
import './Header.css';
import './Sidebar.css';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';

function Header({ status }) {
  const { setAuthStatus } = useContext(TokenAuthContext);
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    navigate('/');
    setAuthStatus(false);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <div style={{ background: 'white' }}>
        <Navbar className="bg-body-tertiary" style={{ borderBottom: 'solid 1px' }}>
          <Container>
            <Toolbar openSidebar={toggleSidebar} closeSidebar={closeSidebar} />
            <Backdrop sidebar={sidebar} closeSidebar={closeSidebar} />
            <Sidebar sidebar={sidebar} />

            <Navbar.Brand href="/" className="d-flex align-items-center">
              <Link to={'/'}>
                <img
                  alt=""
                  src="https://evernote.com/_next/image?url=%2Fimages%2Ficons%2Fcheck.webp&w=64&q=75"
                  width="50"
                  height="50"
                  className="mr-2"
                />
              </Link>
              <Link to={'/'}>
                <h2 className="mb-0">NOVAL STORE </h2>
              </Link>
            </Navbar.Brand>

            <div>
              {!status && (
                <button className="Btn" onClick={handleLogout}>
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="text">Logout</div>
                </button>
              )}
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
