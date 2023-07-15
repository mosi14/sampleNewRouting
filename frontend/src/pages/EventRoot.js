import React from 'react';
import { Outlet } from 'react-router-dom';
import EventNavigationPage from '../components/EventsNavigation';

export default function EventRootLayout() {
  return (
    <>
      <EventNavigationPage />
      <Outlet />
    </>
  );
}
