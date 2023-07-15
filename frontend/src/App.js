import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Root';
import EventsPage, { action as eventsAction } from './pages/Events';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventDetailsPage from './pages/EventDetails';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import EventRootLayout from './pages/EventRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsAction },
          { path: ':eventId', element: <EventDetailsPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
