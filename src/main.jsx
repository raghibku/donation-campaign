import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Donation from './components/Donation.jsx'
import Statistics from './components/Statistics.jsx'
import Home from './components/Home.jsx'
import DonationDetails from './components/DonationDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement:  <ErrorPage/>,
    children: [
      {
        path: '/donation',
        element: <Donation/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
      {
        path: '/donation-details/:id',
        element: <DonationDetails/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
