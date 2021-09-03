import classes from './event-details.module.css';
import Button from '../button/button';

const EventDetails = (props) => {
    const clickHandler = () => {
        history.back();
    }

    if(!props.details){
        return (<div className={classes.details}>
            <p>Loading...</p>
        </div>)
    }

    const {image, title, description, location, date } = props.details;
    return(
        <div className={classes.details}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <time>{date}</time>
            <address>{location}</address>
            <p>
                <Button label='Go Back' handler={clickHandler}/>
            </p>
        </div>
    )
}

export default EventDetails;