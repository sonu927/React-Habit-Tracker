import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { habitAdded } from "../features/habit/habitSlice";

const AddHabit = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const addingHabit = () => {
    dispatch(habitAdded(content));
    setContent("");
  };
  return (
    <div>
      <label>Add Habit :</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addingHabit}>Add</button>
    </div>
  );
};

export default AddHabit;
