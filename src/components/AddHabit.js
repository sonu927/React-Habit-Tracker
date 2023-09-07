import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { habitAdded } from "../features/habit/habitSlice";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles/AddHabit.css";

const AddHabit = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const addingHabit = () => {
    dispatch(habitAdded(content));
    setContent("");
  };
  return (
    <div className="add-habit-container">
      <div>
        <label>Add Habit :</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addingHabit}>
          <AiOutlinePlus />
          Add
        </button>
      </div>
    </div>
  );
};

export default AddHabit;
