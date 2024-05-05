import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AstronomyPOD from './Screens/astronomy-picture-day/AstronomyPOD';
import HomeNASA from "./Screens/home-NASA/HomeNASA";
import DisplayMarsRoverImage from "./Screens/display-mars-rover-image/DisplayMarsRoverImage";
import DisplayNasaImages from "./Screens/display-nasa-images/DisplayNasaImages";
import NewNavbar from "./component/new-navbar/NewNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NewNavbar />
        <Routes>
          <Route path="/apod" element={<AstronomyPOD />} />
          <Route path="/home-nasa" element={<HomeNASA />} />
          <Route path="/display-rover" element={<DisplayMarsRoverImage />} />
          <Route path="/display-nasa-image" element={<DisplayNasaImages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
