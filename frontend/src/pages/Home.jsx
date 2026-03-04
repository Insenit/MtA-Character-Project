import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClassOverlay } from '../components/Overlays';
import { API_BASE } from "../api";

export default function Home({ onCreateCharacter, characters, setCharacters }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [classOptions, setClassOptions] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/get_classes`)
      .then(res => res.json())
      .then(data => setClassOptions(data))
      .catch(() => setClassOptions([]));
  }, []);

  const handleDelete = (id) => {
    const updatedList = characters.filter(c => c.id !== id);
    setCharacters(updatedList);
    localStorage.setItem('characters', JSON.stringify(updatedList));
  };

  const handleCreateClick = () => {
    setShowOverlay(true);
  };

  const handleCancel = () => {
    setShowOverlay(false);
    setSelectedClass(null);
  };

  const handleConfirm = () => {
    if (selectedClass) {
      onCreateCharacter(selectedClass.packageKey);
      setShowOverlay(false);
      setSelectedClass(null);
    }
  };

  return (
    <div className="container">
      <div className="panel">
        <div className="home-header">
          <h1>Your Characters</h1>
          <button onClick={handleCreateClick} className="btn">Create New Character</button>
        </div>

        {characters.length === 0 ? (
          <p>No characters yet.</p>
        ) : (
          <div className="character-grid">
            {characters.map((char) => (
              <div key={char.id} className="character-card panel-alt">
                <Link to={`/character/${char.id}`} style={{ textDecoration: "none", color: "white" }}>
                  <h2>{char.name}</h2>
                  <p>
                    {char.classes?.length > 0
                      ? `${char.classes.map(cls => cls.name).join('/')} (Level ${char.totalLevel || 1})`
                      : '(Level 1)'}
                  </p>
                  <p>Background: {char.background || 'None'}</p>
                </Link>
                <button onClick={() => handleDelete(char.id)} style={{ marginTop: '10px', cursor: 'pointer' }}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {showOverlay && (
        <ClassOverlay
          options={classOptions}
          selected={selectedClass}
          setSelected={setSelectedClass}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          allowMulticlass={false}
        />
      )}
    </div>
  );
}