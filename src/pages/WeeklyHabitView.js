import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { habitStatusToggle } from "../features/habit/habitSlice";
import moment from "moment";
import "../styles/WeeklyHabitView.css";

const WeeklyHabitView = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const toggleStatus = (id) => {
    dispatch(habitStatusToggle(id));
  };

  const getPreviousDays = (date) => {
    const habitDate = moment(date, "Do-MMM");

    const previousSixDays = [];

    for (let i = 1; i <= 6; i++) {
      const previousDay = habitDate.clone().subtract(i, "days");
      previousSixDays.push(previousDay.format("Do-MMM"));
    }

    return previousSixDays;
  };

  const toggleWeekDays = (e) => {
    const statusOptions = ["none", "done", "not-done"];
    const currentIndex = statusOptions.indexOf(e.target.textContent);
    console.log(currentIndex);
    const nextIndex = (currentIndex + 1) % statusOptions.length;
    e.target.textContent = statusOptions[nextIndex];
    console.log(e.target.textContent);
  };
  return (
    <div className="week-habit-container">
      <h1>Weekly-View</h1>
      <ul className="weekly-habit-list">
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              <div>{habit.content}</div>
              <div>
                Today
                <div>
                  {habit.date}
                  <div
                    className="status"
                    onClick={() => {
                      toggleStatus(habit.id);
                    }}
                  >
                    {habit.status}
                  </div>
                </div>
              </div>
              <div className="pre-heading">Pervious-Days :</div>
              <div className="previous-days">
                {getPreviousDays(habit.date).map((d) => {
                  return (
                    <div>
                      <div>{d}</div>
                      <div onClick={toggleWeekDays} className="status">
                        none
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeeklyHabitView;
