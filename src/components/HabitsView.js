import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { habitStatusToggle, habitDeleted } from "../features/habit/habitSlice";
import "../styles/HabitsView.css";
import { AiFillDelete } from "react-icons/ai";

const HabitsView = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const toggleStatus = (id) => {
    dispatch(habitStatusToggle(id));
  };
  return (
    <div className="habit-container">
      <h1>Habits</h1>
      <ul className="habits-list">
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              <div className="date">{habit.date} : </div>
              <div className="text">{habit.content}</div>
              <div
                className="status"
                onClick={() => {
                  toggleStatus(habit.id);
                }}
              >
                <div>{habit.status}</div>
              </div>
              <div className="del-btn">
                <button
                  onClick={() => {
                    dispatch(habitDeleted(habit.id));
                  }}
                >
                  <AiFillDelete />
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
