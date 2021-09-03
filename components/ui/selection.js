import { Fragment } from "react";
import Button from "../button/button";

const Selection = (props) => {
  const { year, month } = props;

  const humanReadableDate = new Date(year, month - 1).toLocaleDateString('en-US',{
    month:'long',
    year:'numeric'
  });

  return(
    <div className="center text-center">
      <h2>Selection : { humanReadableDate }</h2>
      <Button path='/events' label='Go Back'/>
    </div>
  )
}

export default Selection;