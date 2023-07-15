import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function EventDetailsPage() {
  const params = useParams();
  return (
    <>
      <h4>this is the event details page {params.eventId}</h4>
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
}
