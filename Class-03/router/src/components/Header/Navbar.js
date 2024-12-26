import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Space } from 'antd';

export default function Navbar() {
  // const { isAuthenticated, user, handleLogout } = useContext(AuthContext);
  const {user,isAuthentication,handleLogout} = useContext(AuthContext)

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to='/' className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to='/user' className="nav-link">User</Link>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Auth</button>
                <ul className="dropdown-menu">
                  <li><Link to='/auth/register' className="dropdown-item">Register</Link></li>
                  <li><Link to='/auth/login' className="dropdown-item">Login</Link></li>
                  <li><Link to='/auth/forget-password' className="dropdown-item">Forget Password</Link></li>
                </ul>
              </li>
            </ul>
            <div className='d-flex align-items-center'>
              {/* {isAuthenticated && <p className='text-white mb-0 me-2 small'>{user.email}</p>}
              {isAuthenticated
                ? <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
                : <Link to='/auth/login' className='btn btn-success'>Login</Link>
              } */}
              {isAuthentication 
                ? 
                <Space>
                  <p className='text-white small'>{user.email} </p>
                  {console.log('user.email :>> ', user.email)}
                  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                  <Link to="/dasboard/setting" className='btn btn-warning' >Settings</Link>
                </Space>
                :
                <Link to='/auth/login' className='btn btn-success' >Login</Link>
                
              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
