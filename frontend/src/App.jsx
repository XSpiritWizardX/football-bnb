// frontend/src/App.jsx

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session';

import SpotList from './components/SpotList/SpotList'
import SpotShow from './components/SpotShow/SpotShow'
import SpotForm from './components/SpotForm/SpotForm'
import BookingForm from './components/BookingForm/BookingForm'
// import SpotDeleteForm from './components/SpotDeleteForm/SpotDeleteForm'

// import ReviewForm from './components/ReviewForm/ReviewForm'
// import ReviewDeleteForm from './components/ReviewDeleteForm/ReviewDeleteForm'


// import BookingForm from './components/BookingForm/BookingForm'










/*
  get all spots  url '/api/spots'
  create a spot '/api/spots'
  get current user spots '/api/spots/current'
  get details of a spot '/api/spots/:spotId'
  edit spot '/api/spots/:spotId'
  add image to spot '/api/spots/:spotId/images'
  delete a spot '/api/spots/:spotId'

  get all current user reviews '/api/reviews/current'
  get all spot reviews '/api/spots/:spotId/reviews'
  create a review for a spot '/api/spots/:spotId/reviews'
  add image to review based on review id '/api/reviews/:reviewId/images'
  edit a review '/api/reviews/:reviewId'
  delete a review '/api/reviews/:reviewId'

  get current user bookings '/api/bookings/current'
  get bookings for a spot '/api/spots/:spotId/bookings'
  create a booking for a spot '/api/spots/:spotId/bookings'
  edit a booking '/api/bookings/bookingId'
  delete a booking '/api/bookings/bookingId'

  delete a spot image '/api/spot-images/:imageId'
  delete a review image '/api/review-images/:imageId'



*/





function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [



      {
        path: '/',
        element: <SpotList/>
      },
      {
        path: '/spots/:spotId',
        element: <SpotShow/>
      },
      {
        path: '/spots/new',
        element: <SpotForm/>
      },
      // {
      //   path: '/spots/:spotId/bookings',
      //   element: <BookingForm/>
      // },
      // {
      //   path: '/spots/current',
      //   element: <SpotList spots={spots}/>
      // },

      // {
      //   path: '/spots/current',
      //   element: <SpotDeleteForm spots={spots}/>
      // },
      // {
      //   path: '/reviews/current',
      //   element: <ReviewForm reviews={reviews}/>
      // },
      // {
      //   path: '/reviews/current',
      //   element: <ReviewDeleteForm reviews={reviews}/>
      // },

      {
        path:'/spots/:spotId/bookings',
        element: <BookingForm/>
      },




      {
        path:'*',
        element: <h2>Page Not Found</h2>
      }




    ]
  }
]);

function App() {
  return <RouterProvider router={router} />

}

export default App;
