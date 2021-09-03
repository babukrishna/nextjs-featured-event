import EventDetails from "../../components/event/event-details";
import { useRouter } from 'next/router';
import { getEventById } from './../../dummy-data';

const EventDetailsPage = () => {
    const router = useRouter();
    const getDetails = getEventById(router.query.eventid);
    return(
        <EventDetails details={getDetails}/>
    )
}

export default EventDetailsPage;