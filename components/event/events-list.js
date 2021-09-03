import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = ({list}) => {
    return(
        <ul className={classes.list}>
            {
                list.map( item => <EventItem key={item.id} item={item} /> )
            }
        </ul>
    )
}

export default EventList;