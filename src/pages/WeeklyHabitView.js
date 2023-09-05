import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { habitStatusToggle } from "../features/habit/habitSlice";
import moment from "moment";

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
    <div>
      <ul className="weekly-habit-list">
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              <div>{habit.content}</div>
              <div>Today</div>
              <div>{habit.date}</div>
              <div
                onClick={() => {
                  toggleStatus(habit.id);
                }}
              >
                {habit.status}
              </div>

              <div className="previous-days">
                {getPreviousDays(habit.date).map((d) => {
                  return (
                    <>
                      <div>{d}</div>
                      <div onClick={toggleWeekDays}>none</div>
                    </>
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
