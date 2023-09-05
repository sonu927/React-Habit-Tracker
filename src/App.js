import "./App.css";
import AddHabit from "./components/AddHabit";
import HabitsView from "./components/HabitsView";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddHabit />
      <HabitsView />
    </div>
  );
}

export default App;
