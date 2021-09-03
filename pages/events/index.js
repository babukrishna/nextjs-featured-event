import EventList from './../../components/event/events-list';
import { getAllEvents } from './../../dummy-data';
import FormComponent from '../../components/search-form/search-form';
import { Fragment } from 'react';

const EventsList = () => {
    const allEvents = getAllEvents();

    return(
        <Fragment>
            <FormComponent />
            <EventList list={allEvents}/>
        </Fragment>
    )
}

export default EventsList;