import { useRouter } from "next/router";
import { getFilteredEvents } from './../../dummy-data';
import EventList from './../../components/event/events-list';
import { Fragment } from "react";
import Selection from "../../components/ui/selection";
import Info from "../../components/ui/info";

const EventPage = () => {
    const router = useRouter();

    if(!router.query.slug) {
        return <h1 className="center">Loading...</h1>
    }

    const numYear = +router.query.slug[0];
    const numMonth = +router.query.slug[1];
    
    if(isNaN(numYear) || isNaN(numMonth)) {
        return <Info msg="Wrong URL, Something is missing." type='danger'/>
    }

    const data = getFilteredEvents({year:numYear, month:numMonth});

    if(data.length === 0) {
        return <Info msg="Data not available or Wrong Selection" type='warning'/>
    }

    return(
        <Fragment>
            <Selection year={numYear} month={numMonth} />
            <EventList list={data} />
        </Fragment>
    )
}

export default EventPage;