import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharacterView from "./pages/CharacterView";
import { createNewCharacter } from './utils/characteredits/CharacterFactory';
import DebugView from './DebugView';
import { initializeAllItems } from './utils/loaders/ItemCache';

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("characters");
    if (stored) {
      setCharacters(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    initializeAllItems();
  }, []);

  // Create character and navigate to it, accepting className
  const createCharacter = (className) => {
    const newCharacter = createNewCharacter("Unknown Adventurer", className);
    const updatedCharacters = [...characters, newCharacter];

    setCharacters(updatedCharacters);
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));

    navigate(`/character/${newCharacter.id}`);
  };

  return (
    <>
      <Navbar />
      <div className="nav-spacer"></div>
      <Routes>
        <Route
          path="/"
          element={<Home onCreateCharacter={createCharacter} characters={characters} setCharacters={setCharacters} />}
        />
        <Route
          path="/character/:id"
          element={<CharacterView characters={characters} setCharacters={setCharacters} />}
        />
        <Route 
          path="/debug" 
          element={<DebugView />} 
        />
      </Routes>
    </>
  );
}

export default App;