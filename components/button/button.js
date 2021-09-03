import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  if (!props.path && !props.handler) {
    return (
      <button className={classes.btn} type="submit">
        {props.label}
      </button>
    );
  }

  
  if(!props.path && props.handler) {
    const clickHandler = (e) => {
      e.preventDefault();
      console.log(props.handler);
      props.handler();
    }

    return <button onClick={clickHandler} className={classes.btn} type="button">
        {props.label}
      </button>
  }

  return (
    <div className={props.cssName}>
      <Link href={props.path}>
        <a className={classes.btn}>{props.label}</a>
      </Link>
    </div>
  );
};

export default Button;
