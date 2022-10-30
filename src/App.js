import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import Loader from "./components/Loader/Loader";
function App() {
  return (
    <div className="App">
      <h1>Rick and Morty characters</h1>
      <UserCard />
      <Loader />
    </div>
  );
}

export default App;
