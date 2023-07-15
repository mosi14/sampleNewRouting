import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Root';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventDetailsPage,{loader as eventDetailLoader} from './pages/EventDetails';
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
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ':eventId', element: <EventDetailsPage />, loader: eventDetailLoader },
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
