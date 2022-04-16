import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import style from "./CourseInput.module.css";


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidFlag, setValidFalg] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) setValidFalg(true);

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      props.onAddGoal(enteredValue);
    } else {
      setValidFalg(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div  className= {`${style["form-control"]} ${!isValidFlag && style.invalid }`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
