// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
// import {SpotList} from '../SpotList/SpotList.jsx'
function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);


  const validUser = () => {
    if(sessionUser !== null){
      return (

          <NavLink to="/spots/new"
          className="create-a-spot"
          >
            create a spot
          </NavLink>
      )
    }

  }


  return (
<>

    <div>
      <div
      className='header'
      >
        <NavLink to="/">
        <img className='home-image' src='/footballs.webp' />

        </NavLink>

        {validUser()}






      {isLoaded && (
        <span className='nav-bar'>
          <ProfileButton user={sessionUser} />
        </span>
      )}
      </div>

    </div>



</>



  );
}

export default Navigation;
