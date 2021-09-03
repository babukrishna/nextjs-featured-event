import classes from "./search-form.module.css";
import Button from "./../button/button";
import { useRef } from "react";
import { useRouter } from "next/router";

const FormComponent = () => {
  const selectedYear = useRef();
  const selectedMonth = useRef();
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const path = `/events/${selectedYear.current.value}/${selectedMonth.current.value}`;
    router.push(path);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="year">Year</label>
        <select id="year" ref={selectedYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div>
        <label htmlFor="month">month</label>
        <select id="month" ref={selectedMonth}>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">Aug</option>
          <option value="9">Sept</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
      </div>
      <div>
        <Button label="Search" />
      </div>
    </form>
  );
};

export default FormComponent;
