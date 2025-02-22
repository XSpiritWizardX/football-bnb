// frontend/src/components/Navigation/ProfileButton.jsx
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { GiAmericanFootballBall } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import { NavLink } from 'react-router-dom';

import './ProfileButton.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        {/* <GiAmericanFootballBall /> */}
        <div className='menu-icon'>
        <CiMenuBurger />
        </div>
        <div className='user-icon' >
        <FaUserCircle />
        </div>
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div
          className='auth-container'
          >
            <p
            className='account-info'
            >Hello, {user.firstName} {user.lastName}</p>
            {/* <p
            className='account-info'
            >{user.username}</p> */}
            <p
            className='account-info'
            >{user.email}</p>
            <ln
            className='profile-line'
            ></ln>
            <NavLink
            className='nav-links'
              to={'/spots/current'}
            >
              Manage Spots
            </NavLink>

              <NavLink
              className='nav-links'
              to={'/reviews/current'}
              >
                Manage Reviews
              </NavLink>
              <ln
            className='profile-line'
            ></ln>
            <p

              className="logout-container"
            >

              <button
              className='logout-button'
              onClick={logout}>
                Log Out
              </button>
            </p>
          </div>
        ) : (
          <div className="auth-container">

            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
              className="auth-button"
            />
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
              className="auth-button"
            />





          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
