import { getFeaturedEvents } from './../dummy-data';
import EventList from './../components/event/events-list';
import { Fragment } from 'react';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <h1 className="text-center">Featured Events</h1>
      <EventList list={featuredEvents}/>
    </Fragment>
  )
}
