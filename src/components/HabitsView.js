import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { habitStatusToggle, habitDeleted } from "../features/habit/habitSlice";

const HabitsView = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const toggleStatus = (id) => {
    dispatch(habitStatusToggle(id));
  };
  return (
    <div>
      Habits
      <ul>
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              <div>{habit.date}</div>
              <div>{habit.content}</div>
              <div
                onClick={() => {
                  toggleStatus(habit.id);
                }}
              >
                {habit.status}
              </div>
              <div>
                <button
                  onClick={() => {
                    dispatch(habitDeleted(habit.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HabitsView;
