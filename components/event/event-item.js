import classes from './event-item.module.css';
import Button from '../button/button';
import DateIcon from './../icons/date';
import LocationIcon from '../icons/location';

const EventItem = (props) => {
    const { title, description, location, date, image, id } = props.item;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    return <li className={classes.item}>
        <img src={image} alt={title} />
        <div className={classes.content}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={classes.icon}>
                <DateIcon/>
                <time>{humanReadableDate}</time>
            </div>
            <div className={classes.icon}>
                <LocationIcon />
                <address>{location}</address>
            </div>
            
            <Button cssName={classes.actions} path={`/events/${id}`} label='Explore More' />
        </div>
        
        
        
    </li>
}

export default EventItem;