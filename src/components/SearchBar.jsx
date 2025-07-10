import { useState, useEffect } from 'react';
import { fetchAllPokemon } from '../utils/api';

function SearchBar({ onSelect }) {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllPokemon().then(setAllPokemon);
  }, []);

  const filtered = allPokemon.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul>
          {filtered.slice(0, 10).map(p => (
            <li key={p.name}>
              <button onClick={() => onSelect(p.name)}>{p.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
