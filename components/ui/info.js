import classes from './info.module.css';

const Info = (props) => {
  let infoClass = props.type || 'success';

  return(
    <div className={`center ${classes[infoClass]} ${classes.roundedBorder}`}>
      <h1 className="text-center">{ props.msg }</h1>
    </div>
  )
}

export default Info;