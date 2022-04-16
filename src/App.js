import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Header/Header';
import Trainings from './Components/Trainings/Trainings';

function App() {
  return (
    <div className="App bg-black">
    <NavBar></NavBar>
    <Banner></Banner>
    <Trainings></Trainings>
    </div>
  );
}

export default App;
