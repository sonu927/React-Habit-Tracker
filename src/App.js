import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddHabit from "./components/AddHabit";
import HabitsView from "./components/HabitsView";
import NavBar from "./components/NavBar";
import WeeklyHabitView from "./pages/WeeklyHabitView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddHabit />
      <Routes>
        <Route path="/" element={<HabitsView />} />
        <Route path="/weekly" element={<WeeklyHabitView />} />
      </Routes>
    </div>
  );
}

export default App;
