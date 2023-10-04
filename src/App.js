import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarCard";
function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <CarCard searchText={searchText} />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
